import { OverlayProps } from './types';
import * as S from './styles';

export const Overlay: React.FC<OverlayProps> = ({ zIndex = 10, children }) => {
  return (
    <S.OverlayStyle zIndex={zIndex}>
      {children}
    </S.OverlayStyle>
  );
};
