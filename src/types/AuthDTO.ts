export interface LoginInRequest {
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

export interface SignOuRequest {
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
