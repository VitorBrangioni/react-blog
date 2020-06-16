import React from "react";
import BlogPage from "../../src/views/pages/BlogPage";
import { shallow } from "enzyme";

describe("BlogPage", () => {
  describe("BlogPage", () => {
    it("Snapshot test", () => {
      const wrapper = shallow(<BlogPage />);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
