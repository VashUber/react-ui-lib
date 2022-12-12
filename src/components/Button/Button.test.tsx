import { fireEvent, render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("Should render children prop", () => {
    const msg = "Click on me";

    const wrapper = render(<Button>{msg}</Button>);
    expect(wrapper.getByText(msg)).toBeInTheDocument();
  });

  it("Should call callback", () => {
    let value = 0;
    const cb = () => {
      value = 100;
    };
    const wrapper = render(
      <Button data-testid="button" onClick={cb}>
        click
      </Button>
    );
    const btn = wrapper.getByTestId("button");

    fireEvent.click(btn);

    expect(value).toBe(100);
  });
});
