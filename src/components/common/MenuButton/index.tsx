import { MenuButtonProps } from './types';
import * as S from './styles';

export const MenuButton: React.FC<MenuButtonProps> = ({ to, children }) => {

  return (
    <S.NavLinkStyled
      to={to}
    >
      {children}
    </S.NavLinkStyled>
  );
};
