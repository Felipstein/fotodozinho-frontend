import styled from 'styled-components';

import { Container as CheckBoxContainer } from '../../components/CheckBox/styles';
import { Form } from '../../components/Form';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 40rem;
  margin: auto;
  margin-top: 6.4rem;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;

    #top-title {
      margin: 1.6rem 0 2.4rem 0;

      font-weight: 500;
    }

    #bottom-title {
      margin-bottom: 2.8rem;

      font-weight: 600;
    }

  }

  .form-container {
    margin-bottom: 1.6rem;
  }
`;

export const FormStyled = styled(Form)`

  display: flex;
  flex-direction: column;

  max-width: 100%;

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    margin-bottom: 1.6rem;
  }

  .sub-actions {
    display: flex;
    flex-direction: column;
    align-items: center;

    ${CheckBoxContainer} + ${CheckBoxContainer} {
      margin-top: 1.2rem;
    }

    .label-button {
      margin-top: 0.4rem;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    margin-top: 3.6rem;
  }
`;
