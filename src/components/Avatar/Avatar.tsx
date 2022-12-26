import { FC, HTMLAttributes, ImgHTMLAttributes } from "react";
import cn from "classnames";
import { size } from "../SharedTypes";
import classes from "./assets/styles.module.scss";

interface AvatarProps extends ImgHTMLAttributes<any> {
  size: size;
}

export const Avatar: FC<AvatarProps> = ({ size = "sm", ...props }) => {
  return (
    <img
      className={cn(classes["avatar"], classes[`avatar--${size}`])}
      {...props}
    />
  );
};
