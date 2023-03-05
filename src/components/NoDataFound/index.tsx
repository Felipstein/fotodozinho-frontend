import { SmileySad } from '../../icons/SmileySad';
import { Button } from '../Button';
import { Text } from '../Text';
import * as S from './styles';
import { NoDataFoundProps } from './types';

export const NoDataFound: React.FC<NoDataFoundProps> = ({ dataName, onTryAgain }) => {
  return (
    <S.Container>
      <SmileySad size={128} />
      <div className="details">
        <Text>Não temos nenhuma informação {dataName ? `sobre ${dataName}` : ''} para mostrar no momento...</Text>
        {onTryAgain && (
          <Button onClick={onTryAgain}>
            Buscar informações novamente
          </Button>
        )}
      </div>
    </S.Container>
  );
};
