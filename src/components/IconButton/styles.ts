import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { IconButtonProps } from './types';

const BaseStyles = css<IconButtonProps>`
  padding: 0.6rem;

  color: ${({ theme, customStyles }) => customStyles?.color || theme.colors.gray[900]};
  background-color: transparent;

  border: none;
  outline: none;

  border-radius: 128px;

  line-height: 0;
  cursor: pointer;

  transition-property: background-color, color;
  transition: ${({ theme }) => theme.animations.durations.sh} ease-in-out;

  ${({ theme, customStyles }) => css`
    &:hover {
      background-color: ${customStyles?.backgroundColorHovered || theme.colors.gray[100]};
    }

    &:active {
      color: ${customStyles?.colorPressed || theme.colors.white};
      background-color: ${customStyles?.backgroundColorPressed || theme.colors.gray[300]};
    }
  `};
`;

export const LinkStyled = styled(Link)`
  ${BaseStyles}
  `;

export const ButtonStyled = styled.button`
  ${BaseStyles}
`;
