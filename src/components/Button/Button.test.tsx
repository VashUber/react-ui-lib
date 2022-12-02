import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("Should render children prop", () => {
    const msg = "Click on me";

    const button = render(<Button>{msg}</Button>);
    expect(button.baseElement.innerHTML).include(msg);
  });
});
