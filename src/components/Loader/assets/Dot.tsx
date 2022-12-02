import styled from "styled-components";
import { LoaderColorSchema } from "./types";
import { size } from "../../SharedTypes";

export const Dot = styled.div<{ size?: size; colorSchema?: LoaderColorSchema }>`
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

  background: ${({ colorSchema = "default" }) => {
    if (colorSchema === "primary") return "var(--bg-primary)";
    if (colorSchema === "secondary") return "var(--bg-secondary)";
    if (colorSchema === "light") return "var(--light)";

    return "var(--dark)";
  }};
`;
