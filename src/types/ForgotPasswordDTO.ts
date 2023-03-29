export interface ForgotPasswordRequest {
  email: string;
}

export interface SetPasswordRequest {
  token: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface VerifyTokenRequest {
  token: string;
}
