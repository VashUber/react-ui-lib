import { FC, HTMLAttributes } from "react";
import classes from "./assets/styles.module.scss";
import cn from "classnames";
import type { colorSchema, size } from "../SharedTypes";

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  colorSchema?: colorSchema;
  size?: size;
  value?: number;
}

export const Progress: FC<ProgressProps> = ({
  colorSchema = "default",
  size = "sm",
  value = 0,
  ...props
}) => {
  const color =
    colorSchema === "default" ? `var(--dark)` : `var(--bg-${colorSchema})`;
  const style = `conic-gradient(${color} ${
    (value / 100) * 360
  }deg, var(--light) 0deg)`;

  return (
    <div
      className={cn(classes["progress"], classes[`progress--${size}`])}
      style={{
        background: style,
      }}
      data-progress={value}
      {...props}
    />
  );
};
