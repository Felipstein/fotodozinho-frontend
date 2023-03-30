import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  min-height: 100vh;
`;

export const MenuContent = styled.div`
  flex: 1;

  background-color: blue;
`;

export const Header = styled.header``;

export const Content = styled.main<{ isCentered: boolean }>``;
