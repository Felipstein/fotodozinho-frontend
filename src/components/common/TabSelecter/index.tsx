import { TabSelecterProps } from './types';
import * as S from './styles';

export const TabSelecter: React.FC<TabSelecterProps> = ({ isSelected = false, children }) => {

  return (
    <S.Container
      role='button'
      tabIndex={0}
      isSelected={isSelected}
    >
      {children}
    </S.Container>
  );
};
