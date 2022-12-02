import styled from "styled-components";
import { colorSchema } from "../../SharedTypes";
import { variant } from "./types";

export const ButtonStyle = styled.button<{
  variant?: variant;
  colorSchema?: colorSchema;
}>`
  border: none;
  border-radius: 10px;
  width: max-content;
  outline: none;
  cursor: pointer;
  padding: 5px 15px;
  background: none;
  box-sizing: border-box;

  ${({ colorSchema = "default", variant = "default" }) => {
    if (colorSchema === "primary") {
      if (variant === "contained") {
        return `
          background: var(--bg-primary);
          color: var(--light);
        `;
      }

      if (variant === "outline") {
        return `
          border: 1px solid var(--bg-primary);
          color: var(--dark);
        `;
      }

      if (variant === "default") {
        return `
          color: var(--bg-primary);
        `;
      }
    }

    if (colorSchema === "secondary") {
      if (variant === "contained") {
        return `
          background: var(--bg-secondary);
          color: var(--light);
        `;
      }

      if (variant === "outline") {
        return `
          border: 1px solid var(--bg-secondary);
          color: var(--dark);
        `;
      }

      if (variant === "default") {
        return `
          color: var(--bg-secondary);
        `;
      }
    }

    if (colorSchema === "default") {
      if (variant === "contained") {
        return `
          background: var(--light);
          color: var(--dark);
        `;
      }

      if (variant === "outline") {
        return `
          border: 1px solid var(--dark);
          color: var(--dark);
        `;
      }

      if (variant === "default") {
        return `
          color: var(--dark);
        `;
      }
    }
  }}
`;
