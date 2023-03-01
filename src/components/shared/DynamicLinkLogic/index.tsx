import { Link } from 'react-router-dom';
import { DynamicLinkLogicProps, DynamicLinkLogicTarget } from './types';

const targetMapper: Record<DynamicLinkLogicTarget, React.HTMLAttributeAnchorTarget> = {
  navigate: '',
  redirect: '_self',
  redirect_to_new_page: '_blank',
};

export const DynamicLinkLogic: React.FC<DynamicLinkLogicProps> = ({ to, target = 'navigate', children }) => {
  if(target === 'navigate') {
    return (
      <Link to={to}>
        {children}
      </Link>
    );
  }

  return (
    <Link to={to} target={targetMapper[target]} rel='noopener noreferrer'>
      {children}
    </Link>
  );
};
