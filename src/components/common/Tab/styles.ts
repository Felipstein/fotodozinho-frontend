import styled, { css } from 'styled-components';

export const Container = styled.div<{ isSelected: boolean }>`
  padding: 0.6rem 0.8rem;

  border-radius: 128px;
  font-weight: 500;

  cursor: pointer;
  user-select: none;

  transition-property: background-color, color;
  transition: ${({ theme }) => theme.animations.durations.sh} ease-in-out;

  ${({ theme, isSelected }) => isSelected ? css`
    background-color: ${theme.colors.blue[400]};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => theme.colors.blue[300]};
    }

    &:active  {
      background-color: ${({ theme }) => theme.colors.blue[200]};
      color: ${theme.colors.gray[900]};
    }
  ` : css`
    color: ${({ theme }) => theme.colors.gray[600]};

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray[100]};
      color: ${({ theme }) => theme.colors.gray[900]};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.gray[200]};
    }
  `}

`;
