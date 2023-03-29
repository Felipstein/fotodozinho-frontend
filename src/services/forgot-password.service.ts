import { SetPasswordRequest, VerifyTokenRequest, ForgotPasswordRequest } from '../types/ForgotPasswordDTO';
import { api } from './api.service';

export class ForgotPasswordService {

  static async sendRecoveryEmail({ email }: ForgotPasswordRequest): Promise<void> {
    await api.post('/recovery-password', { email });
  }

  static async setPassword({ token, newPassword, confirmNewPassword }: SetPasswordRequest): Promise<void> {
    await api.patch('/set-password', { token, newPassword, confirmNewPassword });
  }

  static async verifyToken({ token }: VerifyTokenRequest): Promise<void> {
    await api.get(`/validate-recovery-password-token/${token}`);
  }

}
