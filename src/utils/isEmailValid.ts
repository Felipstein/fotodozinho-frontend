import { regex } from './regex-provider';

export function isEmailValid(email: string) {
  return regex.email.test(email);
}
