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
    border-radius: 4px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.gray[600]};
    width: 100%;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gray[600]};

    &::after {
      transform: scaleX(1);
    }
  }
`;
