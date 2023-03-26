import { useParams } from 'react-router-dom';

export const ValidateEmail: React.FC = () => {
  const { validateToken } = useParams();

  return (
    <h1>Validando... {validateToken}</h1>
  );
};
