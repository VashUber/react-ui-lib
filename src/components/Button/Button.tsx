import type { FC, HTMLAttributes } from "react";
import { colorSchema } from "../SharedTypes";
import { ButtonStyle } from "./assets";
import { variant } from "./assets/types";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: variant;
  colorSchema?: colorSchema;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};
