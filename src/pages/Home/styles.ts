import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;

  h1 {
    margin-bottom: 3.4rem;

    strong {
      color: ${({ theme }) => theme.colors.blue[500]};
    }
  }
`;
