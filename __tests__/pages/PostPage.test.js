import React from "react";
import PostPage from "../../src/views/pages/PostPage";
import { shallow } from "enzyme";
import posts from "../../__mocks__/posts.mock";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("PostPage", () => {
  it("Snapshot test", () => {
    const wrapper = shallow(
      <PostPage location={{ state: { post: posts[0] } }} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
