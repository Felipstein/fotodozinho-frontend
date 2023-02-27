import { Link } from 'react-router-dom';
import { CustomLabelButtonTarget, LabelButtonProps } from './types';

const targetMapper: Record<CustomLabelButtonTarget, React.HTMLAttributeAnchorTarget> = {
  navigate: '',
  redirect: '_self',
  redirect_to_new_page: '_blank',
};

export const LabelButton: React.FC<LabelButtonProps> = ({ to, target = 'navigate', children }) => {
  if(target === 'navigate') {
    return (
      <Link to={to}>
        {children}
      </Link>
    );
  }

  return (
    <a href={to} target={targetMapper[target]} rel='noopener noreferrer'>
      {children}
    </a>
  );
};
