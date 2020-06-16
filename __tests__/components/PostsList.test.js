import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import PostsList from "../../src/views/components/PostsList";
import postsMock from "../../__mocks__/posts.mock";

const initialState = {
  data: postsMock,
  recentPosts: [],
  authors: [],
  loading: false,
  error: false,
};

const statingState = { data: [], PostDuck: initialState };
function reducer(state = statingState, action) {
  return state;
}

const renderWithRedux = async (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
};

describe("PostsList", () => {
  it("Verify if all posts are rendering", async () => {
    const { queryByTestId } = await renderWithRedux(<PostsList />);

    postsMock.forEach((_, i) => {
      const element = queryByTestId(`post-${i}`);
      expect(element).not.toBeNull();
    });
  });
});
