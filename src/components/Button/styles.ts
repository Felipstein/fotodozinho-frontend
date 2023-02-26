import styled, { css } from 'styled-components';
import { ButtonProps, ButtonVariants } from './types';

const variants: Record<ButtonVariants, (danger: boolean) => any> = {
  primary: (danger: boolean) => css`
    ${({ theme }) => css`
      ${danger ? css`
        background-color: ${theme.colors.red[400]};
        color: ${theme.colors.white};

        &:hover {
          background-color: ${theme.colors.red[300]};
        }

        &:active {
          background-color: ${theme.colors.red[100]};
          color: ${theme.colors.red[400]};
        }
      ` : css`
        background-color: ${theme.colors.blue[400]};
        color: ${theme.colors.white};

        &:hover {
          background-color: ${theme.colors.blue[300]};
        }

        &:active {
          background-color: ${theme.colors.blue[200]};
          color: ${theme.colors.blue[400]};
        }
      `}
    `};
  `,
  secondary: (danger: boolean) => css`
  ${({ theme }) => css`
      ${danger ? css`
        background-color: transparent;
        color: ${theme.colors.red[400]};

        &:hover {
          color: ${theme.colors.red[300]};
        }
      ` : css`
        background-color: transparent;
        color: ${theme.colors.blue[500]};

        &:hover {
          color: ${theme.colors.blue[300]};
        }
      `}
    `};
  `,
};

export const ButtonStyled = styled.button<ButtonProps>`
  ${({ variant, danger }) => variants[variant || 'primary'](danger || false)};

  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.size.text.md};
  font-weight: 600;

  padding: 1.6rem 1.2rem;
  border-radius: 8px;

  cursor: pointer;

  border: none;
  outline: 0;
`;
