import { User } from '../types/User';
import { useAuth } from './useAuth';

/**
 * Apenas um custom hook para se utilizar quando se tem certeza de que o usuário já está autenticado.
 */
export function useAlreadyAuthUser() {
  const { user } = useAuth();

  return user as User;
}
