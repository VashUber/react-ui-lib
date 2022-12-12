import { FC, HTMLAttributes, memo } from "react";
import cn from "classnames";
import { colorSchema, size } from "../SharedTypes";
import classes from "./assets/styles.module.scss";
import { variant } from "./assets/types";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: variant;
  colorSchema?: colorSchema;
  size?: size;
}

export const Button: FC<ButtonProps> = memo(
  ({
    children,
    size = "sm",
    colorSchema = "default",
    variant = "default",
    ...props
  }) => {
    return (
      <button
        {...props}
        className={cn(
          classes["button"],
          classes[`button--${size}`],
          classes[`button--${variant}`],
          classes[`button--${colorSchema}`]
        )}
      >
        {children}
      </button>
    );
  }
);
