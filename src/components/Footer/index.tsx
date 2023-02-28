import { Text } from '../Text';
import * as S from './styles';

export const Footer: React.FC = () => {

  return (
    <S.Container>
      <S.BlockAbout>
        <Text size='xsm'>By Felipe Oliveira</Text>
        <div className="links">
          <button>A</button>
          <button>B</button>
        </div>
      </S.BlockAbout>
      <S.Separator />
      <S.BlockAbout>
        <Text size='xsm'>© 2022 - 2023 Equipe Foto do Zinho.</Text>
        <div className="links">
          <button>A</button>
          <button>B</button>
          <button>C</button>
          <button>D</button>
        </div>
      </S.BlockAbout>
    </S.Container>
  );
};
