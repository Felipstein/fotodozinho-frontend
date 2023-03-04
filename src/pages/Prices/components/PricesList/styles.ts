import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.2rem;

  overflow: hidden;

  & > * {
    flex-shrink: 0;
  }
`;
