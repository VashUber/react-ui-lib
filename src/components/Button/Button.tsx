import { FC, HTMLAttributes, memo, MouseEvent, useRef } from "react";
import cn from "classnames";
import { colorSchema, size } from "../SharedTypes";
import classes from "./assets/styles.module.scss";
import { variant } from "./assets/types";
import { useRipple } from "../../hooks/ripple";

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
    onClick,
    ...props
  }) => {
    const btnRef = useRef<HTMLButtonElement>(null!);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(e);
      }

      useRipple(btnRef, e, classes);
    };

    return (
      <button
        {...props}
        className={cn(
          classes["button"],
          classes[`button--${size}`],
          classes[`button--${variant}`],
          classes[`button--${colorSchema}`]
        )}
        ref={btnRef}
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
);
