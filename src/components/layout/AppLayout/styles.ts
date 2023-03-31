import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  min-height: 100vh;

  .menu-button {
    display: none;

    position: fixed;
    top: 16px;
    left: 16px;

    z-index: 11;

    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-radius: 128px;

    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 768px) {
    .menu-button {
      display: inline-block;
    }
  }
`;

export const MenuContent = styled.div<{ headerWidth: number }>`
  display: flex;
  flex-direction: column;

  flex: 1;

  margin-left: ${({ headerWidth }) => headerWidth}px;
`;

export const Header = styled.header`
  padding: 2rem 3.8rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
`;

export const Content = styled.main`
  flex: 1;
`;
