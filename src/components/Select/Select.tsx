import { HTMLAttributes, Children, ReactElement } from "react";
import type { MenuItemProps } from "../MenuItem/MenuItem";
import { colorSchema, size } from "../SharedTypes";

interface SelectProps<T extends string | number | boolean>
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: T;
  onChange: (v: T) => any;
  children: ReactElement<MenuItemProps<T>>[] | ReactElement<MenuItemProps<T>>;
  size?: size;
  colorSchema?: colorSchema;
}

export const Select = <T extends string | number | boolean>({
  value,
  onChange,
  children,
  ...props
}: SelectProps<T>) => {
  const childrens = Children.map(children, (elem) => {
    return {
      ...elem,
      props: {
        ...elem.props,
        onClick: () => {
          onChange(elem.props.value);
        },
      },
    };
  });

  return (
    <div {...props}>
      <div>{value}</div>

      <div>{childrens}</div>
    </div>
  );
};
