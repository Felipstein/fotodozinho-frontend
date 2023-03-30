import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAlreadyAuthUser } from '../../hooks/useUser';
import { api } from '../../services/api.service';
import { Button } from '../common/Button';

export const GenerateNotifications: React.FC = () => {
  const { id: userId } = useAlreadyAuthUser();
  const [isLoading, setIsLoading] = useState(false);

  async function handleGenerateNotifications() {
    try {
      setIsLoading(true);

      const promises = [];

      for(let i = 0; i < 5; ++i) {
        promises.push(api.post('/notifications', {
          title: 'Título de Notificação',
          message: 'Aqui seria o corpo da notificação, como pode ver, pode ter muitaaa coisa!',
          userId,
        }));
      }

      await Promise.all(promises);

      if(location.href.includes('/app/notifications')) {
        toast.info('Notificações geradas. Recarregue o site para visualiza-las.');
      } else {
        toast.info('Notificações geradas.');
      }
    } catch (err: Error | any) {
      toast.error(err.message || 'Ocorreu um erro ao gerar notificações.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button
      onClick={handleGenerateNotifications}
      isLoading={isLoading}
    >
      Gerar 5 notificações
    </Button>
  );
};
