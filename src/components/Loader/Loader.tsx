import { FC, memo } from "react";
import { size } from "../SharedTypes";
import classes from "./assets/styles.module.scss";
import cn from "classnames";
import { LoaderColorSchema } from "./assets/types";

type LoaderProps = {
  size?: size;
  colorSchema?: LoaderColorSchema;
};

export const Loader: FC<LoaderProps> = memo(
  ({ size = "sm", colorSchema = "default" }) => {
    return (
      <div
        className={cn(
          classes["wrapper"],
          classes[`wrapper--${size}`],
          classes[`wrapper--${colorSchema}`]
        )}
      >
        <div />
        <div />
        <div />
      </div>
    );
  }
);
