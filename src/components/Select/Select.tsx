import { HTMLAttributes, Children, ReactElement } from "react";
import cn from "classnames";
import type { MenuItemProps } from "../MenuItem/MenuItem";
import { colorSchema, size } from "../SharedTypes";
import classes from "./assets/styles.module.scss";

interface SelectProps<T extends string | number | boolean>
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value: T;
  onChange: (v: T) => any;
  children: ReactElement<MenuItemProps<T>>[] | ReactElement<MenuItemProps<T>>;
  size?: size;
  colorSchema?: colorSchema;
  placeholder?: string;
}

export const Select = <T extends string | number | boolean>({
  value,
  onChange,
  children,
  placeholder = "label",
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
    <div {...props} className={classes["select"]}>
      <div className={classes["select__label"]}>
        <div className={classes["select__placeholder"]}>{placeholder}</div>

        {value}
      </div>

      <div className={classes["select__list"]}>{childrens}</div>
    </div>
  );
};
