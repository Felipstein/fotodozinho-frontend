import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  height: 100%;

  color: ${({ theme }) => theme.colors.gray[300]};
`;
