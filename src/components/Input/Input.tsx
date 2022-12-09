import { FC, HTMLAttributes } from "react";
import { InputStyle, InputWrapperStyle, InputLabel } from "./assets/style";
import { colorSchema } from "../SharedTypes";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  colorSchema?: colorSchema;
  value: string;
}

export const Input: FC<InputProps> = ({
  colorSchema,
  value,
  placeholder,
  ...props
}) => {
  return (
    <InputWrapperStyle>
      <InputStyle
        colorSchema={colorSchema}
        isEmpty={!value.length}
        {...props}
      />
      <InputLabel>{placeholder}</InputLabel>
    </InputWrapperStyle>
  );
};
