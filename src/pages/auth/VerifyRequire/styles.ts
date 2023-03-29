import styled from 'styled-components';

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;

  #title {
    margin-top: 1.6rem;
  }

  .sub-title {
    margin-top: 2.4rem;

    text-align: center;

    & > * {
      display: block;
    }

    strong {
      color: ${({ theme }) => theme.colors.blue[400]};
      font-weight: 500;
    }
  }

  #send-again {
    margin-top: 2.4rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }

`;
