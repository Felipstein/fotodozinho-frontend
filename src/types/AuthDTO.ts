import { User } from './User';

export interface LogInRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface SignUpRequest {
  name: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
  notifyServicesByEmail: boolean;
  acceptedTermsAndConditions: boolean;
}

export interface SignOutRequest {
  userId: string;
  tokenRequesting: string;
}

export interface VerifyTokenRequest {
  userId: string;
  tokenRequesting: string;
}

export interface GenerateNewTokenRequest {
  refreshToken: string;
}

export interface LogInResponse {
  user: User;
  token: string;
  refreshToken: string | null;
}

export interface VerifyTokenResponse {
  user: User;
  token: string;
}

export interface GenerateNewTokenResponse {
  token: string;
  refreshToken: string;
}
