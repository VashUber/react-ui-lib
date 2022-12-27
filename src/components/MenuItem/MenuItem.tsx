import { HTMLAttributes, ReactNode, useRef, MouseEvent } from "react";
import cn from "classnames";
import classes from "./assets/styles.module.scss";
import { useRipple } from "../../hooks/ripple";
import { colorSchema } from "../SharedTypes";

export interface MenuItemProps<T extends string | number | boolean>
  extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  children: ReactNode;
  value: T;
  isActive?: boolean;
  onClick?: (...args: any[]) => any;
  colorSchema?: colorSchema;
}

export const MenuItem = <T extends string | number | boolean>({
  children,
  isActive = false,
  onClick,
  colorSchema = "default",
  ...props
}: MenuItemProps<T>) => {
  const itemRef = useRef<HTMLDivElement>(null!);

  const handleClick = (e: MouseEvent<Element>) => {
    if (onClick) {
      onClick();
    }
    useRipple(itemRef, e, classes["ripple"]);
  };

  return (
    <div
      {...props}
      className={cn(
        classes["menu-item"],
        isActive ? classes["menu-item--active"] : "",
        classes[`menu-item--${colorSchema}`]
      )}
      ref={itemRef}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};
