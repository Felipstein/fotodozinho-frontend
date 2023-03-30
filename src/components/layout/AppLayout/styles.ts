import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  min-height: 100vh;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
`;

export const Header = styled.header`
  padding: 2rem 3.8rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
`;

export const Content = styled.main`
  flex: 1;
`;
