import { FC, HTMLAttributes, memo, MouseEvent, useRef } from "react";
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
    onClick,
    ...props
  }) => {
    const btnRef = useRef<HTMLButtonElement>(null!);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      const x = e.nativeEvent.offsetX;
      const y = e.nativeEvent.offsetY;
      if (x === 0 && y === 0) return;

      if (onClick) {
        onClick(e);
      }

      const ripple = document.createElement("span");
      ripple.classList.add(classes["ripple"]);
      ripple.style.top = y + "px";
      ripple.style.left = x + "px";

      btnRef.current.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
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
