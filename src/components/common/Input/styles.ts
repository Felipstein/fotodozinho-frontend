import { Slot } from '@radix-ui/react-slot';
import styled, { css, DefaultTheme } from 'styled-components';
import { Text } from '../Text';

export const Container = styled.div`
  width: 40rem;
`;

export const LabelStyled = styled.label`
  margin-bottom: 0.4rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  cursor: text;

  span {
    font-weight: 500;
  }
`;

function getBorderColor({ theme, isFocused, hasError }: { theme: DefaultTheme, isFocused: boolean, hasError: boolean }) {
  const { colors } = theme;

  if(hasError) {
    if(isFocused) {
      return colors.red[200];
    }

    return colors.red[400];
  }

  if(isFocused) {
    return colors.gray[600];
  }

  return colors.gray[300];
}

export const FieldBox = styled.div<{ isFocused: boolean, hasError: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  overflow: hidden;

  height: 4.5rem;

  transition: border-color ${({ theme }) => theme.animations.durations.sh} ease-in-out;

  border: 2px solid ${getBorderColor};
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 100%;

  outline: none;
  border: none;

  flex: 1;
  padding: 1.2rem 1.6rem;

  background-color: transparent;

  font-weight: 500;
  font-size: ${({ theme }) => theme.size.text.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
  caret-color: ${({ theme }) => theme.colors.blue[500]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const LeftIconContainer = styled.span`
  svg {
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  cursor: text;

  padding-left: 1.2rem;
`;

export const RightIconContainer = styled.span<{ hasAction: boolean }>`
  svg {
    color: ${({ theme }) => theme.colors.gray[600]};
  }

  padding-right: 1.2rem;

  ${({ hasAction, theme }) => hasAction && css`
  cursor: pointer;
  transition: color ${theme.animations.durations.sh} ease-in-out;

    &:hover {
      color: ${theme.colors.gray[400]};
    }
  `};
`;

export const ErrorFeedbackContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  color: ${({ theme }) => theme.colors.red[400]};

  margin-top: 0.4rem;
`;
