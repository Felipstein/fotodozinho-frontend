import { SmileyXEyes } from '../../icons/SmileyXEyes';
import { Button } from '../Button';
import { Text } from '../Text';

import { FailedToFetchDataProps } from './types';
import * as S from './styles';

export const FailedToFetchData: React.FC<FailedToFetchDataProps> = ({ dataName, onTryAgain }) => {

  function getTryAgainMessage() {
    if(onTryAgain) {
      return 'Por favor, tente novamente. Se o erro persistir, entre em contato conosco.';
    }

    return 'Por favor, tente novamente mais tarde.';
  }

  return (
    <S.Container>
      <SmileyXEyes size={128} />
      <div className="details">
        <Text>
          Oops, algo deu errado!
          {' '}
          <strong>
            Não foi possível carregar as informações {dataName ? `sobre ${dataName}` : ''} neste momento
          </strong>.{' '}
          {getTryAgainMessage()}
        </Text>
        {onTryAgain && (
          <Button onClick={onTryAgain}>Tentar novamente</Button>
        )}
      </div>
    </S.Container>
  );
};
