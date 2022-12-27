import { HTMLAttributes, ReactNode } from "react";
import cn from "classnames";
import classes from "./assets/styles.module.scss";

export interface MenuItemProps<T extends string | number | boolean>
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  value: T;
}

export const MenuItem = <T extends string | number | boolean>({
  children,
  ...props
}: MenuItemProps<T>) => {
  return (
    <div {...props} className={classes["menu-item"]}>
      {children}
    </div>
  );
};
