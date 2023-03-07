import styled from 'styled-components';

import { Scrollbar } from '../../../../../components/Scrollbar';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  width: 72.8rem;

  height: 95vh;
  max-height: 70rem;

  main {
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.gray[75]};

    padding: 0.8rem;

    overflow-y: auto;

    pre {
      font-family: ${({ theme }) => theme.font.family};
      color: ${({ theme }) => theme.colors.gray[600]};
    }

    ${Scrollbar}
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: justify;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
  }
`;
