import { put, call } from "redux-saga/effects";
import { Types } from "../ducks/postDuck";
import PostsController from "../../controllers/PostsController";

export function* getPosts() {
  try {
    const posts = yield call(function () {
      return PostsController.getPosts();
    });
    posts.sort((a, b) => {
      const dateA = new Date(a.metadata.publishedAt);
      const dateB = new Date(b.metadata.publishedAt);

      return dateA - dateB;
    });
    const recentPosts = posts.slice(0, 3);

    yield put({
      type: Types.RESPONSE_GET_POSTS,
      payload: { data: posts, recentPosts, loading: false, error: false },
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: Types.RESPONSE_GET_POSTS,
      payload: { data: [], loading: false, error: true },
    });
  }
}
