import styled from "styled-components";
import { size } from "./types";

export const Dot = styled.div<{ size?: size }>`
  width: ${({ size }) => {
    if (size === "lg") return "15px";
    if (size === "md") return "10px";

    return "6px";
  }};
  height: ${({ size }) => {
    if (size === "lg") return "15px";
    if (size === "md") return "10px";

    return "6px";
  }};
  border-radius: 50%;
  background: var(--dark);
`;
