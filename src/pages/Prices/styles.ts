import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100%;

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6.4rem;

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .prices-list {
      list-style: none;

      display: flex;
      gap: 1.2rem;
    }

    .actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.2rem;

      span {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray[400]};
      }
    }
  }
`;
