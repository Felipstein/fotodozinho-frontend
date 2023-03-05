import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.colors.gray[200]};
  }

  .details {
    span {
      display: inline-block;
      margin-bottom: 0.8rem;

      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray[600]};
    }
  }
`;
