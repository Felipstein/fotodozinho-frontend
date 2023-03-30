import { Navigate, useLocation } from 'react-router-dom';

import { SmileySadIcon } from '../../../icons/SmileySadIcon';
import { MenuNav } from './components/MenuNav';

import { AppLayoutProps } from './types';
import * as S from './styles';
import { AppMenu, appMenuLabel } from './components/MenuNav/types';
import { createElement } from 'react';
import { IconDefaultProps } from '../../../icons/icons.types';

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  const params = pathname.match(/^\/app\/(.+)$/);
  if(!params) {
    return <Navigate to='print' />;
  }

  const menuName = params[1];
  const menu = appMenuLabel[menuName as AppMenu];

  return (
    <S.Container>
      <MenuNav />

      <S.MenuContent>
        <S.Header>
          {createElement(menu.icon, { size: 68 })}

          <h1>{menu.label}</h1>
        </S.Header>

        <S.Content>
          {children}
        </S.Content>
      </S.MenuContent>
    </S.Container>
  );
};
