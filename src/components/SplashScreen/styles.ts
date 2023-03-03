import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.blue[500]};

  .centered {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;

    span {
      color: ${({ theme }) => theme.colors.white};
    }

    .loading-message {
      margin-top: 0.8rem;

      span {
        color: ${({ theme }) => theme.colors.white};
        opacity: 0.65;
      }
    }
  }

  .mini-footer {
    margin-bottom: 4.8rem;

    span {
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.4;
    }
  }
`;
