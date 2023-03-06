import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { LabelButton } from '../../components/LabelButton';
import { Logo } from '../../components/Logo';
import { Text } from '../../components/Text';
import { SmileySad } from '../../icons/SmileySad';
import { SmileyXEyes } from '../../icons/SmileyXEyes';
import * as S from './styles';

export const SignIn: React.FC = () => {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <S.PageContainer>
      <S.Container>
        <header>
          <Logo scale={0.625} />
          <Text id='top-title' size='lg'>Bem-vindo(a) a nossa plataforma de serviços!</Text>
          <Text id='bottom-title'>Faça login para continuar</Text>
        </header>

        <div className="form-container">
          <S.FormStyled noValidate onSubmit={handleSubmit}>
            <Input
              label='E-mail'
              name='email'
              type='email'
              placeholder='exemplo@gmail.com'
            />

            <Input
              label='Senha'
              name='password'
              type='password'
              placeholder='*********'
              rightIcon={<SmileyXEyes />}
              onRightIconClick={() => console.log('Oi')}
            />

            <Input
              label='Teste 1'
              name='teste1'
              type='text'
              placeholder='*********'
              leftIcon={<SmileySad />}
            />

            <Input
              name='teste2'
              type='text'
              placeholder='*********'
            />

            <Button type='submit'>Fazer login</Button>
          </S.FormStyled>
        </div>

        <div className="sub-actions">
          <LabelButton $isBlueVariant to='/signup'>
            Não possuo uma conta
          </LabelButton>
        </div>
      </S.Container>
      <Footer />
    </S.PageContainer>
  );
};
