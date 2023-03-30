import { Logo } from '../../common/Logo';
import { SmileySadIcon } from '../../../icons/SmileySadIcon';
import { MenuButton } from '../../common/MenuButton';

import { AppLayoutProps } from './types';
import * as S from './styles';

export const AppLayout: React.FC<AppLayoutProps> = ({ centerContent = false, children }) => {

  return (
    <S.Container>
      <S.SidebarNav>
        <nav className="group">
          <Logo scale={0.35} />

          <MenuButton
            to='notifications'
          >
            Notificações
          </MenuButton>
        </nav>

        <nav className="group more-gap">
          <nav className="group">
            <MenuButton
              to='print'
            >
              Revelação
            </MenuButton>

            <MenuButton
              to='shop'
            >
              Loja
            </MenuButton>

            <MenuButton
              to='orders'
            >
              Meus Pedidos
            </MenuButton>
          </nav>

          <MenuButton
            to='photography'
          >
            Fotografia
          </MenuButton>

          <nav className="group">
            <MenuButton
              to='support'
            >
              Suporte/Ajuda
            </MenuButton>

            <MenuButton
              to='profile'
            >
              Meus Dados
            </MenuButton>

            <MenuButton
              to='logout'
            >
              Sair
            </MenuButton>
          </nav>
        </nav>
      </S.SidebarNav>

      <S.MenuContent>
        <S.Header>
          <SmileySadIcon />

          <h1>Notificações</h1>
        </S.Header>

        <S.Content
          isCentered={centerContent}
        >
          {children}
        </S.Content>
      </S.MenuContent>
    </S.Container>
  );
};
