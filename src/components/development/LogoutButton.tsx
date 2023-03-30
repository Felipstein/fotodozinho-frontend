import { useAuth } from '../../hooks/useAuth';
import { Button } from '../common/Button';

export const LogoutButton: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Button
      onClick={signOut}
    >
      Deslogar
    </Button>
  );
};
