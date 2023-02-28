import { IconButton } from '../IconButton';
import { Text } from '../Text';
import * as S from './styles';

export const Footer: React.FC = () => {

  return (
    <S.Container>
      <S.BlockAbout>
        <Text size='xsm'>By Felipe Oliveira</Text>
        <div className="links">
          <IconButton>
            A
          </IconButton>
          <IconButton>
            B
          </IconButton>
        </div>
      </S.BlockAbout>
      <S.Separator />
      <S.BlockAbout>
        <Text size='xsm'>© 2022 - 2023 Equipe Foto do Zinho.</Text>
        <div className="links">
          <IconButton>
            A
          </IconButton>
          <IconButton>
            B
          </IconButton>
          <IconButton>
            C
          </IconButton>
          <IconButton>
            D
          </IconButton>
        </div>
      </S.BlockAbout>
    </S.Container>
  );
};
