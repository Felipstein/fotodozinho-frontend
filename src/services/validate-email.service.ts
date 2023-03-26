import { SendNewEmailValidateRequest, ValidateEmailRequest } from '../types/ValidateEmailDTO';
import { api } from './api.service';

export class ValidateEmailService {

  static async validateEmail({ token }: ValidateEmailRequest): Promise<void> {
    await api.patch(`/validate-email/${token}`);
  }

  static async sendNewValidateEmail({ email }: SendNewEmailValidateRequest): Promise<void> {
    await api.post('/send-new-validate-email', { email });
  }

}
