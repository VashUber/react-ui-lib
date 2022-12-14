import { MutableRefObject, MouseEvent } from "react";
import classes from "./styles.module.scss";

export const useRipple = (
  elem: MutableRefObject<Element>,
  e: MouseEvent<Element>,
  cn?: string | string[]
) => {
  const x = e.nativeEvent.offsetX;
  const y = e.nativeEvent.offsetY;

  const ripple = document.createElement("span");

  if (cn) {
    if (Array.isArray(cn)) {
      cn.forEach((cl) => {
        ripple.classList.add(cl);
      });
    } else {
      ripple.classList.add(cn);
    }
  }

  ripple.classList.add(classes["ripple"]);
  ripple.style.top = y + "px";
  ripple.style.left = x + "px";

  elem.current.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
};
