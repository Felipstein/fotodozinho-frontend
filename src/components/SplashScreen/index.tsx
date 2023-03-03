import ReactDOM from 'react-dom';

import { SplashScreenProps } from './types';
import * as S from './styles';
import { useEffect } from 'react';
import { Logo } from '../Logo';
import { Text } from '../Text';
import { Loading } from '../Loading';
import { useTheme } from 'styled-components';
import { useAnimatedUnmount } from '../../hooks/useAnimatedUnmount';

export const SplashScreen: React.FC<SplashScreenProps> = ({ visible, isLoading, loadingMessage }) => {
  const theme = useTheme();
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(visible);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if(!shouldRender) {
    return null;
  }

  return ReactDOM.createPortal(
    <S.Container ref={animatedElementRef} isLeaving={!visible}>
      <div className="centered">
        <Logo isWhite scale={0.65} />
        <Text size='lg'>Sempre registrando a sua História</Text>
        {(isLoading || loadingMessage) && (
          <Loading size={42} color={theme.colors.white} />
        )}
        {loadingMessage && (
          <div className="loading-message">
            <Text size='sm'>{loadingMessage}</Text>
          </div>
        )}
      </div>
      <div className="mini-footer">
        <Text size='xsm'>@ 2022 - Equipe Foto do Zinho / by Felipe Oliveira</Text>
      </div>
    </S.Container>,
    document.getElementById('screen-root')!,
  );
};
