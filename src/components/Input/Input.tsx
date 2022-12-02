import { FC, HTMLAttributes } from "react";
import { InputStyle } from "./assets/style";
import { colorSchema } from "../SharedTypes";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  colorSchema?: colorSchema;
}

export const Input: FC<InputProps> = (props) => {
  return <InputStyle {...props} />;
};
