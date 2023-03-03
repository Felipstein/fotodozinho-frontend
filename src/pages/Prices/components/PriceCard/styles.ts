import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
  overflow: hidden;

  span {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  #price {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  .price-card-info {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1.2rem 2.4rem;

    &.top {
      background-color: ${({ theme }) => theme.colors.white};
    }

    &.bottom {
      background-color: ${({ theme }) => theme.colors.gray[100]};
    }
  }

`;
