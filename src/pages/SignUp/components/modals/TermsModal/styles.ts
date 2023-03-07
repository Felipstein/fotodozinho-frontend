import styled from 'styled-components';

import { Scrollbar } from '../../../../../components/Scrollbar';

export const ContentContainer = styled.div`
  header {
    width: 100%;
  }

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
