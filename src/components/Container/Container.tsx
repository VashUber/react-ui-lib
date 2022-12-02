import styled from "styled-components";
import { breakPoints } from "../Global";

export const Container = styled.div`
  width: 100%;
  padding: 0 30px;

  @media (max-width: ${breakPoints.md}) {
    padding: 0 20px;
  }

  @media (max-width: ${breakPoints.xs}) {
    padding: 0 10px;
  }
`;
