import type { FC, HTMLAttributes } from "react";
import { ButtonStyle } from "./assets";
import { colorSchema, variant } from "./assets/types";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: variant;
  colorSchema?: colorSchema;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};
