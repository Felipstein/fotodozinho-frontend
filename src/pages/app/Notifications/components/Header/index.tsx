import { LabelButton } from '../../../../../components/common/LabelButton';
import { Tab } from '../../../../../components/common/Tab';
import { Text } from '../../../../../components/common/Text';
import { CheckCircleIcon } from '../../../../../icons/CheckCircleIcon';
import { TrashIcon } from '../../../../../icons/TrashIcon';

import { HeaderProps } from './types';
import * as S from './styles';

export const Header: React.FC<HeaderProps> = ({
  totalNotifications,
  totalNotificationsUnread,
  isMarkingAllReaded,
  isDeletingReaded,
  onMarkAllReaded,
  onDeleteAllReaded,
  onSetFilter,
  onSetSort,
}) => {
  return (
    <S.Container>
      <div className="total-info">
        <h3>
          {totalNotifications} Notificaç{totalNotifications === 1 ? 'ão' : 'ões'}
        </h3>

        <Text size='sm'>
          {totalNotificationsUnread} não lida{totalNotificationsUnread === 1 ? '' : 's'}
        </Text>
      </div>

      <div className="filters">
        <S.TabSelecterStyled
          onSelect={onSetFilter}
        >
          <Tab value='all'>
              Todas
          </Tab>

          <Tab value='unread'>
              Não lidas
          </Tab>

          <Tab value='readed'>
              Já lidas
          </Tab>
        </S.TabSelecterStyled>

        <S.TabSelecterStyled
          onSelect={onSetSort}
        >
          <Tab value='dec'>
              Mais recente
          </Tab>

          <Tab value='asc'>
              Mais antigo
          </Tab>
        </S.TabSelecterStyled>
      </div>

      <div className="actions">
        <LabelButton
          isLoading={isMarkingAllReaded}
          onClick={onMarkAllReaded}
        >
          <CheckCircleIcon size={19} />
            Marcar todas como lidas
        </LabelButton>

        <LabelButton
          isLoading={isDeletingReaded}
          onClick={onDeleteAllReaded}
        >
          <TrashIcon size={19} />
            Remover todas notificações já lidas
        </LabelButton>
      </div>
    </S.Container>
  );
};
