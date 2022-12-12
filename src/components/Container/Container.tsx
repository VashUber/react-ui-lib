import { FC, HTMLAttributes, memo } from "react";
import classes from "./assets/styles.module.scss";

interface Container extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<Container> = memo(({ children }) => {
  return <div className={classes["container"]}>{children}</div>;
});
