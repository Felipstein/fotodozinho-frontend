import { Children, isValidElement } from 'react';

import { Tab } from '..';

import { TabSelecterProps } from './types';

export const TabSelecter: React.FC<TabSelecterProps> = ({ children, ...props }) => {

  const tabs = Children.map(children, (child) => {
    if(isValidElement(child) && child.type === Tab) {
      return child;
    }

    throw 'TabSelecter aceita apenas filhos do tipo Tab';
  });

  return (
    <div {...props}>
      {tabs}
    </div>
  );
};
