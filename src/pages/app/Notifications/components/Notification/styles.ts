import styled, { css } from 'styled-components';

export const Container = styled.div<{ read: boolean }>`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;

  padding: 2rem 1.6rem;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};

  ${({ read }) => !read && css`
    &::after {
      content: '';

      position: absolute;
      right: 8px;
      top: 8px;

      width: 1.2rem;
      height: 1.2rem;

      border-radius: 12px;
      background-color: ${({ theme }) => theme.colors.blue[400]};
    }
  `};

  ${({ read }) => read && css`
    opacity: 0.8;
  `};

  .data-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${({ theme, read }) => read ? theme.colors.gray[300] : theme.colors.blue[400]};

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

      color: ${({ theme, read }) => read ? theme.colors.gray[900] : theme.colors.blue[400]};
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

    svg {
      color: ${({ theme, read }) => read ? theme.colors.gray[900] : theme.colors.blue[400]};
    }
  }

  @media screen and (max-width: 474px) {
    flex-direction: column;

    .content {
      text-align: center;
    }

    .data-info {
      position: absolute;

      flex-direction: row;
      gap: 0.6rem;

      left: 8px;
      bottom: 8px;
    }
  }

  @media screen and (max-width: 346px) {
    .data-info {
      span {
        font-size: 1rem;
      }
    }
  }
`;
