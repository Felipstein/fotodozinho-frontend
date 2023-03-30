import { Children, cloneElement, ReactElement, useState } from 'react';
import { TabProps } from '../types';
import { TabSelecterProps } from './types';

export const TabSelecter: React.FC<TabSelecterProps> = ({ onSelect, children, ...props }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabSelect(tabIndex: number, tabValue: string) {
    setSelectedTab(tabIndex);

    if(onSelect) {
      onSelect(tabValue);
    }
  }

  return (
    <div {...props}>
      {Children.map(children, (child, index) => {

        const value = (child as ReactElement<TabProps>).props.value;

        if(!value) {
          return child;
        }

        return cloneElement(child as ReactElement<TabProps>, {
          isSelected: selectedTab === index,
          value,
          onClick: () => handleTabSelect(index, value),
        });

      })}
    </div>
  );
};
