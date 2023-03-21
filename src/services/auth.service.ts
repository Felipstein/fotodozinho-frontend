import { api } from './api.service';
import * as Auth from '../types/AuthDTO';

export class AuthService {

  static async logIn({ email, password, rememberMe }: Auth.LogInRequest): Promise<Auth.LogInResponse> {
    const logInResponse = await api.post('/auth/signin', { email, password, rememberMe }) as Auth.LogInResponse;

    return logInResponse;
  }

  static async signUp({
    name, email, phone, password, confirmPassword, notifyServicesByEmail, acceptedTermsAndConditions,
  }: Auth.SignUpRequest): Promise<Auth.LogInResponse> {
    const signUpResponse = await api.post('/auth/signup', {
      name, email, phone, password, confirmPassword, notifyServicesByEmail, acceptedTermsAndConditions,
    }) as Auth.LogInResponse;

    return signUpResponse;
  }

  static async signOut({ userId, tokenRequesting }: Auth.SignOutRequest): Promise<void> {
    await api.post('/auth/signout', { userId, tokenRequesting });
  }

  static async verifyToken({ userId, tokenRequesting }: Auth.VerifyTokenRequest): Promise<Auth.VerifyTokenResponse> {
    const verifyTokenResponse = await api.post('/auth/validate', { userId, tokenRequesting }) as Auth.VerifyTokenResponse;

    return verifyTokenResponse;
  }

  static async generateNewToken({ refreshToken }: Auth.GenerateNewTokenRequest): Promise<Auth.GenerateNewTokenResponse> {
    const generateNewTokenResponse = await api.post('/auth/refresh-token', { refreshToken }) as Auth.GenerateNewTokenResponse;

    return generateNewTokenResponse;
  }

}
