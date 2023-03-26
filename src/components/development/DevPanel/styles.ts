import styled from 'styled-components';

export const Container = styled.div<{ isOpened: boolean }>`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  min-width: 25vw;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  z-index: 5;

  .content {
    flex: 1;

    .group {
      span {
        display: inline-block;

        color: ${({ theme }) => theme.colors.gray[300]};
        margin-bottom: 0.4rem;
      }
    }

    background-color: red;
  }
`;

export const Header = styled.header`
  height: 20%;
  background-color: ${({ theme }) => theme.colors.blue[400]};
`;
