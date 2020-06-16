import React from "react";
import Post from "../../src/views/components/Post";
import postsMock from "../../__mocks__/posts.mock";
import { shallow } from "enzyme";
import { render, fireEvent } from "@testing-library/react";
const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe("Post", () => {
  it("PostsListLoader snapshot", () => {
    const wrapper = shallow(<Post post={postsMock[0]} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("Verify if click in button, change route to `post`", async () => {
    const { getByTestId } = await render(<Post post={postsMock[0]} />);
    const rightClick = { button: 0 };
    fireEvent.click(getByTestId("btn-open-post"), rightClick);

    expect(mockHistoryPush).toHaveBeenCalledWith("/post", {
      post: postsMock[0],
    });
  });
});
