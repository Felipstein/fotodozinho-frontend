import { Logo } from '../../common/Logo';
import { SmileySadIcon } from '../../../icons/SmileySadIcon';
import { MenuButton } from '../../common/MenuButton';

import { AppLayoutProps } from './types';
import * as S from './styles';
import { WarnIcon } from '../../../icons/WarnIcon';
import { NotificationIcon } from '../../../icons/NotificationIcon';
import { PrinterIcon } from '../../../icons/PrinterIcon';
import { ShoppingCartIcon } from '../../../icons/ShoppingCartIcon';
import { ArchiveBoxIcon } from '../../../icons/ArchiveBoxIcon';
import { ApertureIcon } from '../../../icons/ApertureIcon';
import { InfoIcon } from '../../../icons/InfoIcon';
import { UserListIcon } from '../../../icons/UserListIcon';
import { SignOutIcon } from '../../../icons/SignOutIcon';

export const AppLayout: React.FC<AppLayoutProps> = ({ centerContent = false, children }) => {

  return (
    <S.Container>
      <S.SidebarNav>
        <nav className="group">
          <Logo scale={0.35} />

          <MenuButton
            to='notifications'
          >
            <NotificationIcon />
            Notificações
          </MenuButton>
        </nav>

        <nav className="group more-gap">
          <nav className="group">
            <MenuButton
              to='print'
            >
              <PrinterIcon />
              Revelação
            </MenuButton>

            <MenuButton
              to='shop'
            >
              <ShoppingCartIcon />
              Loja
            </MenuButton>

            <MenuButton
              to='orders'
            >
              <ArchiveBoxIcon />
              Meus Pedidos
            </MenuButton>
          </nav>

          <MenuButton
            to='photography'
          >
            <ApertureIcon />
            Fotografia
          </MenuButton>

          <nav className="group">
            <MenuButton
              to='support'
            >
              <InfoIcon />
              Suporte/Ajuda
            </MenuButton>

            <MenuButton
              to='profile'
            >
              <UserListIcon />
              Meus Dados
            </MenuButton>

            <MenuButton
              to='logout'
            >
              <SignOutIcon />
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
