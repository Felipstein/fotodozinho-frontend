import styled from 'styled-components';
import { TabSelecter } from '../../../../../components/common/Tab/TabSelecter';

export const Container = styled.header`
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
