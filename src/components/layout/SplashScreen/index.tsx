import { useEffect } from 'react';
import { useTheme } from 'styled-components';

import { useAnimatedUnmount } from '../../../hooks/useAnimatedUnmount';
import { Loading } from '../../common/Loading';
import { Logo } from '../../common/Logo';
import { ReactPortal } from '../../portal/ReactPortal';
import { Text } from '../../common/Text';

import * as S from './styles';
import { SplashScreenProps } from './types';

export const SplashScreen: React.FC<SplashScreenProps> = ({ visible, isLoading, loadingMessage }) => {
  const theme = useTheme();
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(visible);

  useEffect(() => {
    if(visible) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);

  if(!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId='screen-root'>
      <S.Container ref={animatedElementRef} isLeaving={!visible}>
        <div className="content">
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
        </div>
      </S.Container>
    </ReactPortal>
  );
};
