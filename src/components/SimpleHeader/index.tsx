import { Button } from '../Button';
import { Logo } from '../Logo';
import * as S from './styles';

export const SimpleHeader: React.FC = () => {
  return (
    <S.Container>
      <div className="logo-container">
        <Logo scale={0.45} />
      </div>
      <div className="actions">
        <Button type='navigate' to='/app'>
          Ver nossos serviços
        </Button>

        <Button variant='secondary'>
          Entrar em contato
        </Button>
      </div>
    </S.Container>
  );
};
