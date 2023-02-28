import { FigmaIcon } from '../../icons/FigmaIcon';
import { GitHubIcon } from '../../icons/GitHubIcon';
import { LinkedInIcon } from '../../icons/LinkedInIcon';

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
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </div>
      </S.BlockAbout>
      <S.Separator />
      <S.BlockAbout>
        <Text size='xsm'>© 2022 - 2023 Equipe Foto do Zinho.</Text>
        <div className="links">
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <FigmaIcon />
          </IconButton>
        </div>
      </S.BlockAbout>
    </S.Container>
  );
};
