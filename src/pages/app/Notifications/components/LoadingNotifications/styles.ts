import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme.colors.gray[400]};

  span {
    font-weight: 500;
  }
`;
