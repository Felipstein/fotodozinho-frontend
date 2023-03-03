import ReactDOM from 'react-dom';

import { SplashScreenProps } from './types';
import * as S from './styles';
import { useEffect } from 'react';
import { Logo } from '../Logo';
import { Text } from '../Text';

export const SplashScreen: React.FC<SplashScreenProps> = ({ visible, loadingMessage }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if(!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <S.Container>
      <div className="centered">
        <Logo scale={0.65} />
        <Text size='lg'>Sempre registrando a sua História</Text>
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
