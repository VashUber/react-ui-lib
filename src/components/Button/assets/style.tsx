import { cssVar, lighten } from "polished";
import styled from "styled-components";
import { colorSchema, size } from "../../SharedTypes";
import { variant } from "./types";

export const ButtonStyle = styled.button<{
  variant?: variant;
  colorSchema?: colorSchema;
  size?: size;
}>`
  border: none;
  border-radius: 10px;
  width: max-content;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  box-sizing: border-box;
  transition: var(--transition) background ease-in-out,
    var(--transition) color ease-in-out;

  ${({ size }) => {
    if (size === "lg") {
      return `
        height: 35px;
        width: 80px;
      `;
    }

    if (size === "md") {
      return `
        height: 30px;
        width: 70px;
      `;
    }

    return `
      height: 25px;
      width: 60px;`;
  }}

  ${({ colorSchema = "default", variant = "default" }) => {
    if (colorSchema === "primary") {
      if (variant === "contained") {
        return `
          background: var(--bg-primary);
          color: var(--light);
          &:hover {
            background: ${lighten(
              0.05,
              cssVar("--bg-primary", "#fff") as string
            )}
          }
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
          &:hover {
            color: ${lighten(0.05, cssVar("--bg-primary", "#fff") as string)}
          }
        `;
      }
    }

    if (colorSchema === "secondary") {
      if (variant === "contained") {
        return `
          background: var(--bg-secondary);
          color: var(--light);
          &:hover {
            background: ${lighten(
              0.05,
              cssVar("--bg-secondary", "#fff") as string
            )}
          }
        `;
      }

      if (variant === "outline") {
        return `
          border: 1px solid var(--bg-secondary);
          color: var(--dark);
          &:hover {
            color: ${lighten(0.05, cssVar("--bg-secondary", "#fff") as string)}
          }
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
