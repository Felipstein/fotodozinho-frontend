import styled from 'styled-components';

export const StyledAnchor = styled.a`
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
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.gray[900]};
    transition: width 0.2s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
