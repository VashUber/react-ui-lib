import { render } from "@testing-library/react";
import { Progress } from "./Progress";

describe("Progress", () => {
  it("Should have data-progress attribute with right value", () => {
    const value = "90";
    const wrapper = render(<Progress value={+value} data-testid="progress" />);

    expect(wrapper.getByTestId("progress")).toHaveAttribute(
      "data-progress",
      value
    );
  });
});
