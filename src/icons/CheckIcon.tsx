import { IconDefaultProps } from './icons.types';

export const CheckIcon: React.FC<IconDefaultProps> = ({ color = 'currentColor', size = 32, strokeWidth = 2 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 9L13 23L6 16" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};
