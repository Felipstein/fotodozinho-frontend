import { TabSelecterProps } from './types';
import * as S from './styles';

export const TabSelecter: React.FC<TabSelecterProps> = ({ isSelected = false, onClick, children }) => {

  return (
    <S.Container
      role='button'
      tabIndex={0}
      isSelected={isSelected}
      onClick={onClick}
    >
      {children}
    </S.Container>
  );
};
