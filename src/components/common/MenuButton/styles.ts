import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  padding: 0.8rem;
  border-radius: 8px;

  text-decoration: none;
  font-size: ${({ theme }) => theme.size.text.sm};
  font-weight: 500;

  color: ${({ theme }) => theme.colors.gray[600]};

  transition-property: background-color, color;
  transition: ${({ theme }) => theme.animations.durations.sh} ease-in-out;

  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }

  &.active {
    color: ${({ theme }) => theme.colors.blue[500]};
    pointer-events: none;
  }
`;

export const LittleLine = styled.span<{ isActive: boolean }>`
  margin-top: 0.2rem;

  width: 2.5rem;

  border: 1px solid ${({ theme }) => theme.colors.blue[500]};
  border-radius: 8px;

  transition: opacity ${({ theme }) => theme.animations.durations.sh} ease-in-out;

  ${({ isActive }) => !isActive && css`
    opacity: 0;
  `};
`;
