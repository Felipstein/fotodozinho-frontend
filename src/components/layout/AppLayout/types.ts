import React, { ReactNode } from 'react';
import { ApertureIcon } from '../../../icons/ApertureIcon';
import { ArchiveBoxIcon } from '../../../icons/ArchiveBoxIcon';
import { InfoIcon } from '../../../icons/InfoIcon';

import { NotificationIcon } from '../../../icons/NotificationIcon';
import { PrinterIcon } from '../../../icons/PrinterIcon';
import { ShoppingCartIcon } from '../../../icons/ShoppingCartIcon';
import { SignOutIcon } from '../../../icons/SignOutIcon';
import { UserListIcon } from '../../../icons/UserListIcon';

export type AppMenu = 'notifications' | 'print' | 'shop' | 'orders' | 'photography' | 'support' | 'profile' | 'logout';

export interface AppLayoutProps {
  centerContent?: boolean;
  children: ReactNode;
}

interface AppMenuProperties {
  label: string;
  icon: React.FC;
}

export const appMenuLabel: Record<AppMenu, AppMenuProperties> = {
  notifications: {
    label: 'Notificações',
    icon: NotificationIcon,
  },
  print: {
    label: 'Revelação',
    icon: PrinterIcon,
  },
  shop: {
    label: 'Loja',
    icon: ShoppingCartIcon,
  },
  orders: {
    label: 'Meus Pedidos',
    icon: ArchiveBoxIcon,
  },
  photography: {
    label: 'Fotografia',
    icon: ApertureIcon,
  },
  support: {
    label: 'Suporte/Ajuda',
    icon: InfoIcon,
  },
  profile: {
    label: 'Meus Dados',
    icon: UserListIcon,
  },
  logout: {
    label: 'Sair',
    icon: SignOutIcon,
  },
};
