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
  position: relative;

  display: flex;
  align-items: center;
  gap: 0.2rem;

  ${({ variant = 'primary', danger = false, disabled = false }) => variants[variant]({ danger, disabled })};

  ${({ width }) => width && css`
    width: ${width};
  `};

  ${({ height }) => height && css`
    height: ${height};
  `};

  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.size.text.md};
  font-weight: 600;

  padding: 1.4rem 1.6rem;
  border-radius: 8px;

  cursor: pointer;

  border: none;
  outline: none;

  transition-property: background-color, color;
  transition: ${({ theme }) => theme.animations.durations.sh} ease-in-out;

  &:disabled {
    opacity: 0.8;
    cursor: default;
  }

  ${({ loading }) => loading && css`
    .content-container {
      visibility: hidden;
    }
  `};

  .loading-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: flex;
  }
`;
