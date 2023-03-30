import { NavLink } from 'react-router-dom';

import { MenuButtonProps } from './types';

export const MenuButton: React.FC<MenuButtonProps> = ({ to, children }) => {

  return (
    <NavLink
      to={to}
    >
      {children}
    </NavLink>
  );
};
