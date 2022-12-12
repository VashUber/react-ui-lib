import { FC, HTMLAttributes, memo } from "react";
import cn from "classnames";
import { colorSchema } from "../SharedTypes";
import classes from "./assets/styles.module.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  colorSchema?: colorSchema;
  value: string;
}

export const Input: FC<InputProps> = memo(
  ({ colorSchema = "default", placeholder, ...props }) => {
    return (
      <div className={classes["input"]}>
        <input
          placeholder={placeholder}
          className={cn(
            classes["input__element"],
            classes[`input__element--${colorSchema}`]
          )}
          {...props}
        />
        <div className={classes["input__label"]}>{placeholder}</div>
      </div>
    );
  }
);
