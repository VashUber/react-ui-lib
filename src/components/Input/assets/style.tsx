import styled from "styled-components";
import { colorSchema } from "../../SharedTypes";

export const InputStyle = styled.input<{
  colorSchema?: colorSchema;
}>`
  border-radius: 5px;
  width: 200px;
  height: 30px;
  box-sizing: border-box;
  padding: 12px 10px;
  outline: none;
  font-size: var(--text);
  border: 1px solid
    ${({ colorSchema }) => {
      if (colorSchema === "primary") return "var(--bg-primary)";
      if (colorSchema === "secondary") return "var(--bg-secondary)";

      return "var(--dark)";
    }};
`;
