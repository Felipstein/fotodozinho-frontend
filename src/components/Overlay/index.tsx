import { OverlayProps } from './types';
import * as S from './styles';

export const Overlay: React.FC<OverlayProps> = ({ zIndex = 10, onClick, children }) => {
  return (
    <S.OverlayStyle
      zIndex={zIndex}
      onClick={onClick}
    >
      {children}
    </S.OverlayStyle>
  );
};
