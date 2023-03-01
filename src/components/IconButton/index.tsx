import React from 'react';
import { Link } from 'react-router-dom';

import { IconButtonProps } from './types';
import * as S from './styles';

export const IconButton: React.FC<IconButtonProps> = ({ size = 32, customStyles, to, target = 'navigate', onClick, children }) => {
  const icon = React.Children.only(children);

  if(to) {
    return target === 'navigate' ? (
      <S.BaseStyles
        as={Link}
        size={size}
        customStyles={customStyles}
        to={to}
      >
        {React.cloneElement(icon, { size })}
      </S.BaseStyles>
    ) : (
      <S.BaseStyles
        as={Link}
        size={size}
        customStyles={customStyles}
        to={to}
        target={target}
      >
        {React.cloneElement(icon, { size })}
      </S.BaseStyles>
    );
  }

  return (
    <S.BaseStyles
      as='button'
      size={size}
      customStyles={customStyles}
      onClick={onClick}
    >
      {React.cloneElement(icon, { size })}
    </S.BaseStyles>
  );
};
