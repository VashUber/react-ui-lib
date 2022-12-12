import { FC, memo } from "react";
import { size } from "../SharedTypes";
import { Dot, DotWrapper } from "./assets";
import { LoaderColorSchema } from "./assets/types";

type LoaderProps = {
  size?: size;
  colorSchema?: LoaderColorSchema;
};

export const Loader: FC<LoaderProps> = memo(({ size, colorSchema }) => {
  return (
    <DotWrapper size={size}>
      <Dot size={size} colorSchema={colorSchema} />
      <Dot size={size} colorSchema={colorSchema} />
      <Dot size={size} colorSchema={colorSchema} />
    </DotWrapper>
  );
});
