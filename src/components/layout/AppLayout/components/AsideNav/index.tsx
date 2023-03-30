import { ApertureIcon } from '../../../../../icons/ApertureIcon';
import { ArchiveBoxIcon } from '../../../../../icons/ArchiveBoxIcon';
import { InfoIcon } from '../../../../../icons/InfoIcon';
import { NotificationIcon } from '../../../../../icons/NotificationIcon';
import { PrinterIcon } from '../../../../../icons/PrinterIcon';
import { ShoppingCartIcon } from '../../../../../icons/ShoppingCartIcon';
import { SignOutIcon } from '../../../../../icons/SignOutIcon';
import { UserListIcon } from '../../../../../icons/UserListIcon';
import { Logo } from '../../../../common/Logo';
import { MenuButton } from '../../../../common/MenuButton';

import * as S from './styles';

export const AsideNav: React.FC = () => {
  return (
    <S.Container>
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
    </S.Container>
  );
};
