import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("Should change value on change event", () => {
    const cb = jest.fn();
    const value = "test value";

    render(<Input data-testid="input" onChange={cb} />);

    const input: HTMLInputElement = screen.getByTestId("input");

    fireEvent.change(input, { target: { value } });

    expect(cb).toBeCalledTimes(1);
    expect(input.value).toBe(value);
  });
});
