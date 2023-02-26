import styled, { css } from 'styled-components';
import { ButtonProps, ButtonVariants } from './types';

type ButtonVariantFn = (danger: boolean) => ReturnType<typeof css>;

const primaryVariant: ButtonVariantFn = (danger: boolean) => css`
${({ theme }) => css`
    background-color: ${danger ? theme.colors.red[400] : theme.colors.blue[400]};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${danger ? theme.colors.red[300] : theme.colors.blue[300]};
    }

    &:active {
      background-color: ${danger ? theme.colors.red[100] : theme.colors.blue[200]};
      color: ${danger ? theme.colors.red[400] : theme.colors.blue[400]};
    }
  `};
`;

const secondaryVariant: ButtonVariantFn = (danger: boolean) => css`
${({ theme }) => css`
    background-color: transparent;
    color: ${danger ? theme.colors.red[400] : theme.colors.blue[500]};

    &:hover {
      color: ${danger ? theme.colors.red[300] : theme.colors.blue[300]};
    }
  `};
`;

const variants: Record<ButtonVariants, ButtonVariantFn> = {
  primary: primaryVariant,
  secondary: secondaryVariant,
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
