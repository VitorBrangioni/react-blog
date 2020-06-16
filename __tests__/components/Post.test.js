import React from "react";
import Post from "../../src/views/components/Post";
import postsMock from "../../__mocks__/posts.mock";
import { shallow } from "enzyme";


describe("Loaders", () => {
  it("PostsListLoader snapshot", () => {
    const wrapper = shallow(<Post post={postsMock[0]} />);

    expect(wrapper).toMatchSnapshot();
  });
});
