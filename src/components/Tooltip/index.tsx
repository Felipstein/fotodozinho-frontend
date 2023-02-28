import * as RadixTooltip from '@radix-ui/react-tooltip';

import { TooltipProps } from './types';

export const Tooltip: React.FC<TooltipProps> = ({ tooltipMessage, children }) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root delayDuration={300}>
        <RadixTooltip.Trigger asChild>
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content>
            {tooltipMessage}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
