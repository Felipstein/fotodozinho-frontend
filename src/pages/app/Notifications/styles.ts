import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  padding: 3.2rem;
`;

export const NotificationsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[100]};

  padding: 3.2rem 1.2rem;
  border-radius: 8px;

  height: 100%;
`;

export const NotificationsList = styled.ul`
  list-style: none;

  background-color: ${({ theme }) => theme.colors.gray[50]};

  border-radius: 8px;
  overflow: hidden;

  width: 80%;
  max-width: 80rem;

  height: 100%;

  max-width: 102.8rem;
  margin: auto;
`;
