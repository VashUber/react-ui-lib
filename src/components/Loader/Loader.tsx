import { FC } from "react";
import { colorSchema, size } from "../SharedTypes";
import { Dot, DotWrapper } from "./assets";

type LoaderProps = {
  size?: size;
  colorSchema?: colorSchema;
};

export const Loader: FC<LoaderProps> = ({ size, colorSchema }) => {
  return (
    <DotWrapper size={size}>
      <Dot size={size} colorSchema={colorSchema} />
      <Dot size={size} colorSchema={colorSchema} />
      <Dot size={size} colorSchema={colorSchema} />
    </DotWrapper>
  );
};
