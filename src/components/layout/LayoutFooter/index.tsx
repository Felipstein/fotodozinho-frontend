import { Footer } from '../Footer';

import { LayoutFooterProps } from './types';
import * as S from './styles';

export const LayoutFooter: React.FC<LayoutFooterProps> = ({ children }) => {

  return (
    <S.Layout>
      <div className="content">
        {children}
      </div>
      <Footer />
    </S.Layout>
  );
};
