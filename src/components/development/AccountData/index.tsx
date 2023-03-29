import { useAuth } from '../../../contexts/AuthContext';
import { Text } from '../../common/Text';

import * as S from './styles';

export const AccountData: React.FC = () => {
  const { user } = useAuth();

  if(!user) {
    return null;
  }

  return (
    <S.Container>
      <S.InfoBlock>
        <Text className='info-identification' size='xsm'>
          Nome:
        </Text>

        <Text className='info-value'>
          {user.name}
        </Text>
      </S.InfoBlock>

      <S.InfoBlock>
        <Text className='info-identification' size='xsm'>
          E-mail:
        </Text>

        <Text className='info-value'>
          {user.email}
        </Text>
      </S.InfoBlock>

      <S.InfoBlock>
        <Text className='info-identification' size='xsm'>
          Admin:
        </Text>

        <Text className='info-value'>
          {user.admin ? 'Sim' : 'Não'}
        </Text>
      </S.InfoBlock>

      <S.InfoBlock>
        <Text className='info-identification' size='xsm'>
          Status:
        </Text>

        <Text className={`info-value ${user.verified ? 'verified' : 'not-verified'}`}>
          {user.verified ? 'Verificado' : 'Aguardando verificação'}
        </Text>
      </S.InfoBlock>
    </S.Container>
  );
};
