import styled from 'styled-components';
import { TabSelecter } from '../../../components/common/Tab/TabSelecter';

export const Container = styled.div`
  height: 100%;

  padding: 3.2rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.8rem;

  .total-info {
    display: flex;
    flex-direction: column;

    h3 {
      font-weight: 600;
    }

    span {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray[400]};
    }
  }

  .filters {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1.6rem;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }
`;

export const TabSelecterStyled = styled(TabSelecter)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
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
