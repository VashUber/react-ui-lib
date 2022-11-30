import { FC } from "react";
import { Dot, DotWrapper } from "./assets";
import type { size } from "./assets/types";

type LoaderProps = {
  size: size;
};

export const Loader: FC<LoaderProps> = ({ size }) => {
  return (
    <DotWrapper size={size}>
      <Dot size={size} />
      <Dot size={size} />
      <Dot size={size} />
    </DotWrapper>
  );
};
