import styled from 'styled-components';
import { Form } from '../../components/Form';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 45rem;
  margin: auto;
  margin-top: 6.4rem;

  flex: 1;

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

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    margin-bottom: 0.4rem;
  }

  .sub-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    margin-top: 3.6rem;
  }
`;
