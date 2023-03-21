import { useAuth } from '../../../contexts/AuthContext';
import * as S from './styles';

export const FloatingLogoutButton: React.FC = () => {

  const { isAuthenticated, signOut } = useAuth();

  return (
    <S.ButtonStyled
      disabled={!isAuthenticated}
      onClick={signOut}
    >
      Deslogar
    </S.ButtonStyled>
  );
};
