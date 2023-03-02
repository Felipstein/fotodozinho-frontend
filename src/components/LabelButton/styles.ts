import styled from 'styled-components';

import { DynamicLinkLogic } from '../shared/DynamicLinkLogic';

export const LinkStyled = styled(DynamicLinkLogic)`
  position: relative;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray[900]};
  text-decoration: none;
  font-size: 1.4rem;
  padding-bottom: 2px;

  &::after {
    content: "";
    position: absolute;
    height: 2px;
    border-radius: 4px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.gray[600]};
    width: 100%;
    transform: scaleX(0);
    transition: transform ${({ theme }) => theme.animations.durations.md} ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gray[600]};

    &::after {
      transform: scaleX(1);
    }
  }
`;
