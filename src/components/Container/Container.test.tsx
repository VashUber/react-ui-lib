import { render, queryByAttribute } from "@testing-library/react";
import { Container } from "./Container";

describe("Container", () => {
  it("Should render children prop", async () => {
    const container = render(
      <Container>
        <div id="children">children</div>
      </Container>
    );

    expect(
      queryByAttribute("id", container.baseElement, "children")
    ).toBeTruthy();
  });
});
