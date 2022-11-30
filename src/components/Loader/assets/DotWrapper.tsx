import styled, { keyframes } from "styled-components";

const blinkAnimation = keyframes`
  20% {
    transform: scale(1);
  }

  70% {
    transform: scale(0);
  }
`;

export const DotWrapper = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  gap: 2px;

  div {
    will-change: contents;
    animation: ${blinkAnimation} infinite ease-in-out 1.25s;
    transform: scale(0);
  }

  div:nth-child(2) {
    animation-delay: 200ms;
  }

  div:nth-child(3) {
    animation-delay: 450ms;
  }
`;
