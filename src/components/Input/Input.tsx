import { FC, HTMLAttributes, memo } from "react";
import { InputStyle, InputWrapperStyle, InputLabel } from "./assets/style";
import { colorSchema } from "../SharedTypes";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  colorSchema?: colorSchema;
  value: string;
}

export const Input: FC<InputProps> = memo(
  ({ colorSchema, value, placeholder, ...props }) => {
    return (
      <InputWrapperStyle>
        <InputStyle
          colorSchema={colorSchema}
          value={value}
          isEmpty={!value.length}
          {...props}
        />
        <InputLabel>{placeholder}</InputLabel>
      </InputWrapperStyle>
    );
  }
);
