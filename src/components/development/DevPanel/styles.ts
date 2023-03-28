import styled from 'styled-components';

export const Container = styled.div<{ isOpened: boolean }>`
  position: absolute;

  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */

  min-width: 25vw;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  z-index: 5;

  .content {
    flex: 1;

    margin: 1.6rem auto;

    .group {
      span {
        display: inline-block;

        color: ${({ theme }) => theme.colors.gray[300]};
        margin-bottom: 0.4rem;
      }
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue[400]};

  padding: 1.6rem;

  display: flex;
  justify-content: space-between;

  #dev-title {
    color: ${({ theme }) => theme.colors.gray[50]};
    text-align: center;
  }
`;
