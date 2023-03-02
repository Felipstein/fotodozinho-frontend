import React from 'react';
import { Link } from 'react-router-dom';

import { IconButtonProps } from './types';
import * as S from './styles';
import { targetMapper } from '../../shared/LinkTarget';

export const IconButton: React.FC<IconButtonProps> = ({ size = 32, customStyles, to, linkTarget = 'navigate', onClick, children }) => {
  const icon = React.Children.only(children);

  if(to) {
    return linkTarget === 'navigate' ? (
      <S.LinkStyled
        as={Link}
        size={size}
        customStyles={customStyles}
        to={to}
      >
        {React.cloneElement(icon, { size })}
      </S.LinkStyled>
    ) : (
      <S.LinkStyled
        as={Link}
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
    <S.LinkStyled
      as='button'
      size={size}
      customStyles={customStyles}
      onClick={onClick}
    >
      {React.cloneElement(icon, { size })}
    </S.LinkStyled>
  );
};
