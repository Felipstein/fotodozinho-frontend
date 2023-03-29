import styled, { css } from 'styled-components';
import { Button } from '../../common/Button';
import { Text } from '../../common/Text';

export const Container = styled.div<{ isOpened: boolean }>`
  position: fixed;

  display: flex;
  flex-direction: column;

  min-width: 25vw;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.soft};

  z-index: 5;

  transform: translateX(0);
  transition: transform ${({ theme }) => theme.animations.durations.md} ease;

  ${({ isOpened }) => !isOpened && css`
    transform: translateX(-100%);
  `}

  .content {
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    margin: 1.6rem auto;

    .group {
      span {
        display: inline-block;

        color: ${({ theme }) => theme.colors.gray[300]};
        margin-bottom: 0.4rem;
      }
    }
  }
`;

export const DevPanelToggle = styled(Button)<{ isOpened: boolean }>`
  position: fixed;
  bottom: 1.6rem;
  right: 1.6rem;

  ${({ isOpened }) => isOpened && css`
    display: none;
  `};
`;

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue[400]};

  padding: 1.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  #dev-title {
    color: ${({ theme }) => theme.colors.gray[50]};
    text-align: center;
  }
`;

export const DangerText = styled(Text)`
  color: ${({ theme }) => theme.colors.red[400]};
  font-weight: 500;
`;
