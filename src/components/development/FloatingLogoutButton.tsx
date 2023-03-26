import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../common/Button';

export const FloatingLogoutButton: React.FC = () => {
  const { isAuthenticated, signOut } = useAuth();

  return (
    <Button
      disabled={!isAuthenticated}
      onClick={signOut}
    >
      Deslogar
    </Button>
  );
};
