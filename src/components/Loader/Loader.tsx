import { FC } from "react";
import { Dot, DotWrapper } from "./assets";

export const Loader: FC = () => {
  return (
    <DotWrapper>
      <Dot />
      <Dot />
      <Dot />
    </DotWrapper>
  );
};
