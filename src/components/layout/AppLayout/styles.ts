import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  min-height: 100vh;
`;

export const SidebarNav = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 2.4rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};

  .group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;

    &.more-gap {
      gap: 3.2rem;
    }
  }
`;

export const MenuContent = styled.div`
  flex: 1;

  background-color: blue;
`;

export const Header = styled.header``;

export const Content = styled.main<{ isCentered: boolean }>``;
