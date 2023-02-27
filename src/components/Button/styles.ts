import styled, { css } from 'styled-components';
import { ButtonProps, ButtonVariants } from './types';

interface ButtonVariantProps {
  danger: boolean;
  disabled: boolean;
}

type ButtonVariantFn = (buttonVariantProps: ButtonVariantProps) => ReturnType<typeof css>;

const primaryVariant: ButtonVariantFn = ({ danger, disabled }) => css`
  ${({ theme }) => css`
    background-color: ${disabled ? theme.colors.gray[200] : (danger ? theme.colors.red[400] : theme.colors.blue[400])};
    color: ${disabled ? theme.colors.gray[50] : theme.colors.white};

    &:hover {
      background-color: ${disabled ? '' : (danger ? theme.colors.red[300] : theme.colors.blue[300])};
    }

    &:active {
      background-color: ${disabled ? '' : (danger ? theme.colors.red[100] : theme.colors.blue[200])};
      color: ${disabled ? '' : (danger ? theme.colors.red[400] : theme.colors.blue[400])};
    }
  `}
`;

const secondaryVariant: ButtonVariantFn = ({ danger, disabled }) => css`
  ${({ theme }) => css`
    background-color: transparent;
    color: ${disabled ? theme.colors.gray[200] : (danger ? theme.colors.red[400] : theme.colors.blue[500])};

    &:hover {
      color: ${disabled ? '' : (danger ? theme.colors.red[300] : theme.colors.blue[300])};
    }
  `};
`;

const variants: Record<ButtonVariants, ButtonVariantFn> = {
  primary: primaryVariant,
  secondary: secondaryVariant,
};

export const ButtonStyled = styled.button<ButtonProps>`
  ${({ variant = 'primary', danger = false, disabled = false }) => variants[variant]({ danger, disabled })};

  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.size.text.md};
  font-weight: 600;

  padding: 1.6rem 1.2rem;
  border-radius: 8px;

  cursor: pointer;

  border: none;
  outline: none;

  &:disabled {
    opacity: 0.8;
    cursor: default;
  }
`;
