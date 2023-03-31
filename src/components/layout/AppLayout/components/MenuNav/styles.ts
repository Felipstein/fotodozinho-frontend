import styled, { css } from 'styled-components';

export const Container = styled.aside<{ isMenuOpened: boolean }>`
  position: fixed;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};

  .group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

    &.more-gap {
      gap: 3.2rem;
    }
  }

  @media screen and (max-width: 768px) {
    z-index: 10;

    transform: translateX(-100%);

    transition: transform ${({ theme }) => theme.animations.durations.md} ease;

    ${({ isMenuOpened }) => isMenuOpened && css`
      transform: translateX(0);
    `}
  }
`;
