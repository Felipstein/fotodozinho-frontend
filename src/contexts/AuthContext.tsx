/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { TokenStorageService, TokenType } from '../services/token-storage.service';
import { LogInRequest, LogInResponse, SignOutRequest, SignUpRequest } from '../types/AuthDTO';
import { User } from '../types/User';

export type TokenState = Record<TokenType, string | null>;

export interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  logIn: (logInRequest: LogInRequest) => Promise<LogInResponse | undefined>;
  signUp: (signUpRequest: SignUpRequest) => Promise<LogInResponse | undefined>;
  signOut: (signOutRequest: SignOutRequest) => Promise<void>;
}

// @ts-ignore
export const AuthContext = createContext<AuthContextProps>();

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [tokens, setTokens] = useState<TokenState>({
    token: null,
    refresh_token: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const logIn = useCallback(async ({ email, password, rememberMe }: LogInRequest) => {

    if(user) {
      toast.error('Você já está autenticado.');
      return;
    }

    try {
      setIsLoading(true);

      const logInResponse = await AuthService.logIn({ email, password, rememberMe }) as LogInResponse;
      const { user, token, refreshToken } = logInResponse;

      setUser(user);
      setTokens({ token, refresh_token: refreshToken ?? null });

      api.setAuthorizationToken(token);

      TokenStorageService.storageToken('token', token);
      if(refreshToken) {
        TokenStorageService.storageToken('refresh_token', refreshToken);
      }

      toast.success(`Bem vindo de volta, ${user.name}.`);

      return logInResponse;
    } catch (err: Error | any) {
      toast.error(err.message || 'Não foi possível realizar seu login, tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  const signUp = useCallback(async ({
    name, email, phone, password, confirmPassword, notifyServicesByEmail, acceptedTermsAndConditions,
  }: SignUpRequest) => {

    if(user) {
      toast.error('Você já está autenticado.');
      return;
    }

    try {
      setIsLoading(true);

      const signUpResponse = await AuthService.signUp({
        name, email, phone, password, confirmPassword, notifyServicesByEmail, acceptedTermsAndConditions,
      }) as LogInResponse;
      const { user, token, refreshToken } = signUpResponse;

      setUser(user);
      setTokens({ token, refresh_token: refreshToken });

      api.setAuthorizationToken(token);

      TokenStorageService.storageToken('token', token);
      if(refreshToken) {
        TokenStorageService.storageToken('refresh_token', refreshToken);
      }

      toast.success(`Seu cadastro está quase concluído, ${user.name}! Enviamos em seu e-mail um link para verificar sua conta. É rapidinho, vai lá! :)`);

      return signUpResponse;
    } catch (err: Error | any) {
      toast.error(err.message || 'Não foi possível realizar seu cadastro, tente novamente ou, caso for retornado como já cadastrado, bastante fazer o login.');
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  const signOut = useCallback(async ({ userId, tokenRequesting }: SignOutRequest) => {

    if(!user) {
      toast.error('Você não está autenticado.');
      return;
    }

    try {
      setIsLoading(true);

      await AuthService.signOut({ userId, tokenRequesting });

      setUser(null);
      setTokens({ token: null, refresh_token: null });

      api.unsetAuthorizationToken();

      TokenStorageService.unstorageToken();

      toast.warn('Você foi desconectado.');
    } catch {} finally {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!user,
      user,
      token: tokens.token,
      refreshToken: tokens.refresh_token,
      isLoading,
      logIn,
      signUp,
      signOut,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
