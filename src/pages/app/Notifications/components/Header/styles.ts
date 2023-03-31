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

  @media screen and (max-width: 1208px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;

    .filters {
      width: 100%;

      gap: 6.4rem;
      flex-direction: row;
    }
  }

  @media screen and (max-width: 618px) {
    .filters {
      align-items: flex-start;

      flex-direction: column;
      gap: 1.6rem;
    }
  }

  @media screen and (max-width: 589px) {
    .actions {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.8rem;
    }
  }
`;

export const TabSelecterStyled = styled(TabSelecter)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
