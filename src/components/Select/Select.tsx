import {
  HTMLAttributes,
  Children,
  ReactElement,
  useState,
  useEffect,
  useRef,
} from "react";
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
  colorSchema = "default",
  ...props
}: SelectProps<T>) => {
  const [isFocused, setIsFocused] = useState(false);
  const selectLabelRef = useRef<HTMLDivElement>(null!);

  const childrens = Children.map(children, (elem) => {
    return {
      ...elem,
      props: {
        ...elem.props,
        isActive: elem.props.value === value,
        colorSchema: colorSchema,
        onClick: () => {
          onChange(elem.props.value);
        },
      },
    };
  });

  const toggleFocus = () => {
    setIsFocused((prev) => !prev);
  };

  const disableFoucs = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!selectLabelRef.current.contains(e.target as Node)) {
        disableFoucs();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      {...props}
      className={cn(
        classes["select"],
        isFocused ? classes["select--focus"] : "",
        value ? classes["select--active"] : "",
        classes[`select--${colorSchema}`]
      )}
    >
      <div
        className={classes["select__label"]}
        onClick={toggleFocus}
        ref={selectLabelRef}
      >
        <div className={classes["select__placeholder"]}>{placeholder}</div>

        {value}
      </div>

      <div className={classes["select__list"]}>{childrens}</div>
    </div>
  );
};
