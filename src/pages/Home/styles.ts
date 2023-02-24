import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 strong {
    color: ${({ theme }) => theme.colors.blue[500]};
  }
`;
