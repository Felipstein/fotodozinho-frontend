import { useTheme } from 'styled-components';
import { IconButton } from '../../IconButton';

import { SocialIconButtonProps } from './types';
import * as S from './styles';

export const SocialIconButton: React.FC<SocialIconButtonProps> = ({ label, to, icon }) => {
  const theme = useTheme();

  if(label) {
    return (
      <S.Container>
        {label}
        <IconButton size={24} customStyles={{ color: theme.colors.gray[300] }}>
          {icon}
        </IconButton>
      </S.Container>
    );
  }

  return (
    <IconButton size={24} customStyles={{ color: theme.colors.gray[300] }}>
      {icon}
    </IconButton>
  );
};
