import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("Should render children prop", () => {
    const msg = "Click on me";

    const wrapper = render(<Button>{msg}</Button>);
    expect(wrapper.getByText(msg)).toBeInTheDocument();
  });
});
