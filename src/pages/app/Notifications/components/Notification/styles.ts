import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;

  padding: 1.6rem 0.8rem;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

  .data-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${({ theme }) => theme.colors.gray[300]};

    .data-time {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-weight: 500;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    flex: 1;

    .notification-title {
      color: ${({ theme }) => theme.colors.gray[900]};
      font-weight: 500;
    }

    .notification-body {
      color: ${({ theme }) => theme.colors.gray[600]};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    color: ${({ theme }) => theme.colors.gray[900]};
  }
`;
