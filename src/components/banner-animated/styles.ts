import styled, { keyframes } from 'styled-components';

export const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 40vh;
  position: relative;
  overflow: hidden;

  @media (min-width: 2327px) {
    display: flex;
    width: 50vw;
    margin: auto;
  }

  @media (min-width: 800px) {
    display: flex;
    width: 50vw;
    margin: auto;
  }

`;

export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  &.current {
    animation-name: ${slideIn};
  }

  &.next {
    animation-name: ${slideOut};
  }
`;
