import { FigmaIcon } from '../../../icons/FigmaIcon';
import { GitHubIcon } from '../../../icons/GitHubIcon';
import { LinkedInIcon } from '../../../icons/LinkedInIcon';

import { Text } from '../../common/Text';
import { SocialIconButton } from './SocialIconButton';

import * as S from './styles';

export const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.BlockAbout>
        <Text size='xsm'>By Felipe Oliveira</Text>
        <div className="links">
          <SocialIconButton to='https://github.com/Felipstein' icon={<GitHubIcon />} />
          <SocialIconButton to='https://linkedin.com/in/feelipeoliveira/' icon={<LinkedInIcon />} />
        </div>
      </S.BlockAbout>
      <S.Separator />
      <S.BlockAbout>
        <Text size='xsm'>© 2022 - 2023 Equipe Foto do Zinho.</Text>
        <div className="links">
          <SocialIconButton to='https://github.com/Felipstein/fotodozinho-frontend' label='web' icon={<GitHubIcon />} />
          <SocialIconButton to='https://github.com/Felipstein/fotodozinho-backend' label='api' icon={<GitHubIcon />} />
          <SocialIconButton to='#' icon={<LinkedInIcon />} />
          <SocialIconButton to='https://www.figma.com/file/kmzDbzv1RmXuwywZxhDony/Foto-do-Zinho?node-id=73%3A1220&t=ntAmriYAxIg0m3Hv-1' icon={<FigmaIcon />} />
        </div>
      </S.BlockAbout>
    </S.Container>
  );
};
