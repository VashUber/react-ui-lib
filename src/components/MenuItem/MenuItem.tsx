import { HTMLAttributes, ReactNode } from "react";

export interface MenuItemProps<T extends string | number | boolean>
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  value: T;
}

export const MenuItem = <T extends string | number | boolean>({
  children,
  ...props
}: MenuItemProps<T>) => {
  return <div {...props}>{children}</div>;
};
