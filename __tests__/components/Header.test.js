import React from "react";
import Header from "../../src/views/components/Header";
import { render } from "@testing-library/react";

describe("Header", () => {
  it("Snapshot test", () => {
    const wrapper = render(<Header />);

    expect(wrapper).toMatchSnapshot();
  });
});
