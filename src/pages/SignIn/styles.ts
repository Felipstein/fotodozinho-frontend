import styled from 'styled-components';

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

    .form-container {
      margin-bottom: 1.6rem;
    }
  }
`;

export const FormStyled = styled.form``;
