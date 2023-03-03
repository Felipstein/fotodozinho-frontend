import React from 'react';

import { targetMapper } from '../../shared/LinkTarget';

import { IconButtonProps } from './types';
import * as S from './styles';

export const IconButton: React.FC<IconButtonProps> = ({ size = 32, customStyles, to, linkTarget = 'navigate', onClick, children }) => {
  const icon = React.Children.only(children);

  if(to) {
    return linkTarget === 'navigate' ? (
      <S.LinkStyled
        size={size}
        customStyles={customStyles}
        to={to}
      >
        {React.cloneElement(icon, { size })}
      </S.LinkStyled>
    ) : (
      <S.LinkStyled
        size={size}
        customStyles={customStyles}
        to={to}
        target={targetMapper[linkTarget]}
      >
        {React.cloneElement(icon, { size })}
      </S.LinkStyled>
    );
  }

  return (
    <S.ButtonStyled
      as='button'
      size={size}
      customStyles={customStyles}
      onClick={onClick}
    >
      {React.cloneElement(icon, { size })}
    </S.ButtonStyled>
  );
};
