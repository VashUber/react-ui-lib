import { FC } from "react";
import { Dot, DotWrapper } from "./parts";

export const Loader: FC = () => {
  return (
    <DotWrapper>
      <Dot />
      <Dot />
      <Dot />
    </DotWrapper>
  );
};
