import backgroundImage from '/404.png';

import * as S from './styles';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { Logo } from '../../components/Logo';

export const NotFound: React.FC = () => {
  return (
    <S.Container backgroundImage={backgroundImage}>
      <S.SoftOverlay />

      <Text id='main-title'>404</Text>

      <div className="sub-title">
        <Text>Acho que estamos um pouco longe da realidade...</Text>
        <Text>Tem certeza de onde está indo?...</Text>
      </div>

      <div className="action">
        <Button type='navigate' to='/'>
          Me leve de volta
        </Button>
      </div>

      <div className="logo-container">
        <Logo isWhite scale={0.45} />
      </div>
    </S.Container>
  );
};
