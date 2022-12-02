import styled from "styled-components";
import { size, colorSchema } from "../../SharedTypes";

export const Dot = styled.div<{ size?: size; colorSchema?: colorSchema }>`
  ${({ size }) => {
    if (size === "lg")
      return `
      width: 15px;
      height: 15px;
    `;
    if (size === "md")
      return `
      width: 10px;
      height: 10px;
    `;

    return `
      width: 6px;
      height: 6px;
    `;
  }}

  border-radius: 50%;
  background: var(--dark);
`;
