import { useState } from 'react';

import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { FieldProps } from '../../components/Form/Field/types';
import { FieldSpecificer } from '../../components/Form/FieldSpecifier';
import { LabelButton } from '../../components/LabelButton';
import { Logo } from '../../components/Logo';
import { Text } from '../../components/Text';
import { TermsModal } from './components/modals/TermsModal';

import * as S from './styles';

// - Sistema de validação

export const SignUp: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingError, setSubmittingError] = useState<string | null>(null);

  const fields: FieldProps[] = [
    {
      name: 'name',
      label: 'Nome',
      type: 'text',
    },
    {
      name: 'email',
      label: 'E-mail',
      type: 'email',
      placeholder: 'exemplo@exemplo.com',
    },
    {
      name: 'phone',
      label: 'Telefone',
      type: 'text',
      required: false,
    },
    {
      name: 'password',
      label: 'Senha',
      type: 'password',
      placeholder: 'Sua senha aqui',
    },
    {
      name: 'confirmPassword',
      label: 'Confirmar senha',
      type: 'password',
      placeholder: 'Confirme sua senha aqui',
    },
    {
      name: 'notifyServicesByEmail',
      label: 'Desejo ser notificado por e-mail sobre as atualizações dos meus serviços e pedidos.',
      type: 'checkbox',
    },
    {
      name: 'acceptTerms',
      label: 'Aceito os Termos de Serviço e Uso da Aplicação Foto do Zinho.',
      type: 'checkbox',
    },
  ];

  function handleCloseModal() {
    setIsModalOpened(false);
  }

  async function handleSubmit(data: Record<string, any>) {

    try {
      setIsSubmitting(true);
      setSubmittingError(null);

      await new Promise(resolve => setTimeout(resolve, 1500));
      throw new Error('Falha ao logar: motivo desconhecido');

    } catch (err: Error | any) {
      setSubmittingError(err.message);
    } finally {
      setIsSubmitting(false);
    }

  }

  return (
    <S.PageContainer>
      <TermsModal isOpened={isModalOpened} onClose={handleCloseModal} />

      <S.Container>
        <header>
          <Logo scale={0.625} />
          <Text id='top-title' size='lg'>Bem-vindo(a)!</Text>
          <Text id='bottom-title'>Cadastre-se para usar nossos serviços já</Text>
        </header>

        <div className="form-container">
          <S.FormStyled
            fields={fields}
            onSubmit={handleSubmit}
            onFormStatusChange={({ isFormValid }) => setIsFormValid(isFormValid)}
          >

            <div className="inputs">
              <FieldSpecificer name='name' />

              <FieldSpecificer name='email' />

              <FieldSpecificer name='phone' />

              <FieldSpecificer name='password' />

              <FieldSpecificer name='confirmPassword' />
            </div>

            <div className="sub-actions">
              <FieldSpecificer name='notifyServicesByEmail' />

              <FieldSpecificer name='acceptTerms' />

              <div className="label-button">
                <LabelButton onClick={() => setIsModalOpened(true)}>
                  Ver os Termos de Serviço e Uso
                </LabelButton>
              </div>
            </div>

            <div className="actions">
              <Button
                type='submit'
                disabled={!isFormValid}
                isLoading={isSubmitting}
              >
                Cadastrar
              </Button>
            </div>

          </S.FormStyled>
        </div>

        <div className="sub-actions">
          <LabelButton $isBlueVariant to='/login'>
            Já possuo uma conta
          </LabelButton>

          <Text style={{ color: 'red' }} asChild>
            <p>
              {submittingError}
            </p>
          </Text>
        </div>

      </S.Container>
      <Footer />
    </S.PageContainer>
  );
};
