import React from 'react';

import { IconButtonProps } from './types';
import * as S from './styles';

export const IconButton: React.FC<IconButtonProps> = ({ size = 32, customStyles, onClick, children }) => {

  const icon = React.Children.only(children);

  return (
    <S.ButtonStyled
      size={size}
      customStyles={customStyles}
      onClick={onClick}
    >
      {React.cloneElement(icon, { size })}
    </S.ButtonStyled>
  );
};
