import { render, queryByAttribute } from "@testing-library/react";
import { Container } from "./Container";

describe("Container", () => {
  it("Should render children prop", async () => {
    const container = render(
      <Container>
        <div data-testid="children">children</div>
      </Container>
    );

    expect(container.getByTestId("children")).toBeInTheDocument();
  });
});
