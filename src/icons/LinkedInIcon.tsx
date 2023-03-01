import { IconDefaultProps } from './icons.types';

export const LinkedInIcon: React.FC<IconDefaultProps> = ({ size = 32, color = 'currentColor' }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.16286 31.9993H0.528571V10.635H7.16286V31.9993ZM3.84214 7.72071C1.72071 7.72071 0 5.96357 0 3.84214C1.51843e-08 2.82314 0.404796 1.84588 1.12534 1.12534C1.84588 0.404796 2.82314 0 3.84214 0C4.86114 0 5.83841 0.404796 6.55895 1.12534C7.27949 1.84588 7.68429 2.82314 7.68429 3.84214C7.68429 5.96357 5.96286 7.72071 3.84214 7.72071ZM31.9929 31.9993H25.3729V21.5993C25.3729 19.1207 25.3229 15.9421 21.9236 15.9421C18.4743 15.9421 17.9457 18.635 17.9457 21.4207V31.9993H11.3186V10.635H17.6814V13.5493H17.7743C18.66 11.8707 20.8236 10.0993 24.0514 10.0993C30.7657 10.0993 32 14.5207 32 20.2636V31.9993H31.9929Z" fill={color} />
    </svg>
  );
};
