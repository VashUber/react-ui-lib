import styled from "styled-components";
import { colorSchema } from "../../SharedTypes";

export const InputStyle = styled.input<{
  colorSchema?: colorSchema;
  isEmpty: boolean;
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

  ${({ isEmpty }) => {
    if (isEmpty)
      return `
    &:focus + div {
      top: -2px;
      font-size: 12px;
    }
    `;

    return `
      & + div {
        top: -2px;
        font-size: 12px;
      }
    `;
  }}
`;

export const InputWrapperStyle = styled.div`
  position: relative;
  width: max-content;
`;

export const InputLabel = styled.div`
  top: 50%;
  left: 10px;
  font-size: 14px;
  transform: translate(0, -50%);
  width: max-content;
  position: absolute;
  transition: top var(--transition) ease-in, font-size var(--transition) ease-in;
  background: var(--light);
  padding: 3px 0;
  pointer-events: none;
`;
