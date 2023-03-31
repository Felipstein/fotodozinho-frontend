import { createElement, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AppMenu, appMenuLabel } from './components/MenuNav/types';
import { MenuNav } from './components/MenuNav';

import { AppLayoutProps } from './types';
import * as S from './styles';
import { IconButton } from '../../common/IconButton';
import { SmileySadIcon } from '../../../icons/SmileySadIcon';
import { MenuIcon } from '../../../icons/MenuIcon';

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const [menuNavWidth, setMenuNavWidth] = useState(145);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    const menuNavElement = document.getElementById('menu-nav');

    if(menuNavElement) {
      setMenuNavWidth(menuNavElement.offsetWidth);
    }

    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const params = pathname.match(/^\/app\/(.+)$/);
  if(!params) {
    return <Navigate to='print' />;
  }

  const menuName = params[1];
  const menu = appMenuLabel[menuName as AppMenu];

  return (
    <S.Container>
      <MenuNav isOpened={isMenuOpened} />

      <div className="menu-button">
        <IconButton
          onClick={() => setIsMenuOpened(prevState => !prevState)}
        >
          <MenuIcon />
        </IconButton>
      </div>

      <S.MenuContent
        headerWidth={screenWidth > 768 ? menuNavWidth : 0}
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
