import { css } from 'styled-components';

export const Scrollbar = css`
  &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray[300]};
    border-radius: 8px;

    transition: background-color ${({ theme }) => theme.animations.durations.md} ease-in-out;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }
`;
