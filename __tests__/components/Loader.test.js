import React from "react";
import { PostsListLoader } from "../../src/views/components/Loader";
import { shallow } from "enzyme"

describe("Loaders", () => {
  it("PostsListLoader snapshot", () => {
    const wrapper = shallow(<PostsListLoader />);

    expect(wrapper).toMatchSnapshot();
  });
});
