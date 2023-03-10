import { useState } from 'react';

import { Button } from '../../components/Button';
import { CheckBox } from '../../components/CheckBox';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { LabelButton } from '../../components/LabelButton';
import { Logo } from '../../components/Logo';
import { PasswordInput } from '../../components/PasswordInput';
import { Text } from '../../components/Text';
import { useFieldsErrors } from '../../hooks/useFieldsErrors';
import { formatPhone } from '../../utils/formatPhone';
import { isEmailValid } from '../../utils/isEmailValid';
import { TermsModal } from './components/modals/TermsModal';

import * as S from './styles';

export const SignUp: React.FC = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [notifyServicesByEmail, setNotifyServicesByEmail] = useState<boolean>(false);
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);

  const {
    setError,
    removeError,
    getErrorFeedback,
    hasErrors,
  } = useFieldsErrors();

  const isFormValid = (name && email && password && confirmPassword && acceptTerms) && !hasErrors;

  function handleCloseModal() {
    setIsModalOpened(false);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if(!value) {
      setError({ fieldName: 'name', feedback: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }

    setName(value);
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if(!value) {
      setError({ fieldName: 'email', feedback: 'E-mail é obrigatório' });
    } else if(!isEmailValid(value)) {
      setError({ fieldName: 'email', feedback: 'E-mail inválido' });
    } else {
      removeError('email');
    }

    setEmail(value);
  }

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setPhone(formatPhone(value));
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if(!value) {
      setError({ fieldName: 'password', feedback: 'Senha é obrigatória' });
    } else if(value.length < 8) {
      setError({ fieldName: 'password', feedback: 'Sua senha deve ter no mínimo 8 caracteres' });
    } else {
      removeError('password');
    }

    setPassword(value);
  }

  function handleConfirmPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if(!value) {
      setError({ fieldName: 'confirmPassword', feedback: 'Confirmar senha é obrigatória' });
    } else if(password !== value) {
      setError({ fieldName: 'confirmPassword', feedback: 'As senhas não coincidem' });
    } else {
      removeError('confirmPassword');
    }

    setConfirmPassword(value);
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
          <S.FormStyled noValidate onSubmit={handleSubmit}>
            <div className="inputs">
              <Input
                label='Nome *'
                name='name'
                type='text'
                value={name}
                onChange={handleNameChange}
                errorFeedback={getErrorFeedback('name')}
              />

              <Input
                label='E-mail *'
                name='email'
                type='email'
                placeholder='exemplo@gmail.com'
                value={email}
                onChange={handleEmailChange}
                errorFeedback={getErrorFeedback('email')}
              />

              <Input
                label='Telefone'
                name='phone'
                type='text'
                value={phone}
                onChange={handlePhoneChange}
                errorFeedback={getErrorFeedback('phone')}
              />

              <PasswordInput
                label='Senha *'
                name='password'
                placeholder='Sua senha aqui'
                value={password}
                onChange={handlePasswordChange}
                errorFeedback={getErrorFeedback('password')}
              />

              <PasswordInput
                label='Confirmar senha *'
                name='confirmPassword'
                placeholder='Confirme sua senha aqui'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                errorFeedback={getErrorFeedback('confirmPassword')}
              />
            </div>

            <div className="sub-actions">
              <CheckBox
                label='Desejo ser notificado por e-mail sobre as atualizações dos meus serviços e pedidos.'
                checked={notifyServicesByEmail}
                onChange={setNotifyServicesByEmail}
              />

              <CheckBox
                label='Aceito os Termos de Serviço e Uso da Aplicação Foto do Zinho.'
                checked={acceptTerms}
                onChange={setAcceptTerms}
              />

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
        </div>
      </S.Container>
      <Footer />
    </S.PageContainer>
  );
};
