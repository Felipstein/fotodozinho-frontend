import React from 'react';

import { targetMapper } from '../../../shared/LinkTarget';
import { Loading } from '../Loading';

import { IconButtonProps } from './types';
import * as S from './styles';

export const IconButton: React.FC<IconButtonProps> = ({
  size = 32,
  to,
  color,
  linkTarget = 'navigate',
  onClick,
  isLoading = false,
  isDisabled = false,
  children,
}) => {
  const icon = React.Children.only(children);

  if(isLoading) {
    return (
      <Loading size={size} />
    );
  }

  if(to) {
    return linkTarget === 'navigate' ? (
      <S.LinkStyled
        color={color}
        size={size}
        to={to}
        isDisabled={isDisabled}
      >
        {React.cloneElement(icon, { size })}
      </S.LinkStyled>
    ) : (
      <S.LinkStyled
        color={color}
        size={size}
        to={to}
        target={targetMapper[linkTarget]}
        isDisabled={isDisabled}
      >
        {React.cloneElement(icon, { size })}
      </S.LinkStyled>
    );
  }

  return (
    <S.ButtonStyled
      color={color}
      as='button'
      size={size}
      onClick={onClick}
      isDisabled={isDisabled}
    >
      {React.cloneElement(icon, { size })}
    </S.ButtonStyled>
  );
};
