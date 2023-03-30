import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { IconButtonProps } from './types';

const BaseStyles = css<IconButtonProps>`
  padding: 0.6rem;

  color: ${({ theme, color }) => color || theme.colors.gray[900]};
  background-color: transparent;

  border: none;
  outline: none;

  border-radius: 128px;

  line-height: 0;
  cursor: pointer;

  transition-property: background-color, color;
  transition: ${({ theme }) => theme.animations.durations.sh} ease-in-out;

  ${({ theme, isDisabled }) => isDisabled && css`
    pointer-events: none;
    opacity: 0.3;

    svg {
      color: ${theme.colors.gray[300]} !important;
    }
  `};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }

  &:active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const LinkStyled = styled(Link)`
  ${BaseStyles}
  `;

export const ButtonStyled = styled.button`
  ${BaseStyles}
`;
