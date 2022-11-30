import styled, { keyframes } from "styled-components";
import { size } from "./types";

const blinkAnimation = keyframes`
  20% {
    transform: scale(1);
  }

  70% {
    transform: scale(0);
  }
`;

export const DotWrapper = styled.div<{ size?: size }>`
  display: flex;
  width: max-content;
  justify-content: center;
  align-items: center;
  gap: ${({ size }) => {
    if (size === "lg") return "8px";
    if (size === "md") return "6px";

    return "4px";
  }};

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
