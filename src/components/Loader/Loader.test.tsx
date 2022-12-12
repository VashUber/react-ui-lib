import { render } from "@testing-library/react";
import { Loader } from "./Loader";

describe("Loader", () => {
  it("Should render", () => {
    const wrapper = render(<Loader data-testid="loader" />);

    expect(wrapper.getByTestId("loader")).toBeInTheDocument();
  });
});
