import { put, call } from "redux-saga/effects";
import { Types } from "../ducks/postDuck";
import PostsController from "../../controllers/PostsController";

export function* getPosts() {
  try {
    const response = yield call(function () {
      return PostsController.getPosts();
    });

    yield put({
      type: Types.RESPONSE_GET_POSTS,
      payload: { data: response, loading: false, error: false },
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: Types.RESPONSE_GET_POSTS,
      payload: { data: [], loading: false, error: true },
    });
  }
}
