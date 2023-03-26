import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;

  height: 100%;
`;

export const Container = styled.div`
  flex: 1;
  margin-top: 6.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 3.4rem;

    strong {
      color: ${({ theme }) => theme.colors.blue[500]};
    }
  }

  .subtitle {
    margin-bottom: 3.8rem;

    p {
      text-align: center;
    }
  }

  .actions {
    display: flex;
    gap: 1.6rem;

    margin-top: 4.8rem;
  }

  .sub-actions {
    margin-top: 3.2rem;
  }

  @media screen and (max-width: 696px) {
    h1 {
      font-size: ${({ theme }) => theme.size.heading.md};
    }

    p {
      font-size: ${({ theme }) => theme.size.text.lg};
    }
  }

  @media screen and (max-width: 558px) {
    h1 {
      font-size: ${({ theme }) => theme.size.heading.sm};
    }

    p {
      font-size: ${({ theme }) => theme.size.text.md};
    }
  }
`;
