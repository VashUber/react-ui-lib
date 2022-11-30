import type { FC, HTMLAttributes } from "react";
import { ButtonStyle } from "./assets";

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};
