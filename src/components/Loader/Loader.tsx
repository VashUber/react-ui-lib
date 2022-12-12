import { FC, HTMLAttributes, memo } from "react";
import { size } from "../SharedTypes";
import classes from "./assets/styles.module.scss";
import cn from "classnames";
import { LoaderColorSchema } from "./assets/types";

interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  size?: size;
  colorSchema?: LoaderColorSchema;
}

export const Loader: FC<LoaderProps> = memo(
  ({ size = "sm", colorSchema = "default", ...props }) => {
    return (
      <div
        className={cn(
          classes["wrapper"],
          classes[`wrapper--${size}`],
          classes[`wrapper--${colorSchema}`]
        )}
        {...props}
      >
        <div />
        <div />
        <div />
      </div>
    );
  }
);
