export function formatPhone(phoneNumber: string) {
  if(phoneNumber.length > 15) {
    return phoneNumber.substring(0, 15);
  }

  return phoneNumber
    .replace(/\D/g, '')
    .replace(/^(\d{2})/, '($1) ')
    .replace(/(\d{1})?(\d{4})(\d{4})/, '$1$2-$3');
}
