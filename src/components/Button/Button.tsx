import type { FC, HTMLAttributes } from "react";
import { Loader } from "../Loader/Loader";
import { colorSchema } from "../SharedTypes";
import { ButtonStyle } from "./assets";
import { variant } from "./assets/types";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: variant;
  colorSchema?: colorSchema;
  loading?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, loading, ...props }) => {
  return (
    <ButtonStyle {...props}>
      {!loading ? (
        children
      ) : (
        <Loader
          colorSchema={
            props.variant === "contained" &&
            (props.colorSchema === "primary" ||
              props.colorSchema === "secondary")
              ? "light"
              : "default"
          }
        />
      )}
    </ButtonStyle>
  );
};
