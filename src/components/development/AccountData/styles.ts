import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const InfoBlock = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .info-identification {
    color: ${({ theme }) => theme.colors.gray[400]};
    font-weight: 500;
  }

  .info-value {
    color: ${({ theme }) => theme.colors.gray[600]};
    font-weight: 500;

    &.not-verified {
      color: ${({ theme }) => theme.colors.gold[400]};
    }

    &.verified {
      color: ${({ theme }) => theme.colors.green[500]}
    }
  }
`;
