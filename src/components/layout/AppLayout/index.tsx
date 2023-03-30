import { createElement, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AppMenu, appMenuLabel } from './components/MenuNav/types';
import { MenuNav } from './components/MenuNav';

import { AppLayoutProps } from './types';
import * as S from './styles';

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const [menuNavWidth, setMenuNavWidth] = useState(145);

  useEffect(() => {
    const menuNavElement = document.getElementById('menu-nav');

    if(menuNavElement) {
      setMenuNavWidth(menuNavElement.offsetWidth);
    }
  }, []);

  const params = pathname.match(/^\/app\/(.+)$/);
  if(!params) {
    return <Navigate to='print' />;
  }

  const menuName = params[1];
  const menu = appMenuLabel[menuName as AppMenu];

  return (
    <S.Container>
      <MenuNav />

      <S.MenuContent
        headerWidth={menuNavWidth}
      >
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
