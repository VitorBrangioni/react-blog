import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  getPosts: [],
  responseGetPosts: [],
});

/**
 * Handlers
 */

const INITIAL_STATE = {
  data: [],
  recentPosts: [],
  loading: false,
  error: false,
};

const getPosts = (state = INITIAL_STATE, { payload }) => ({
  data: payload.data,
  recentPosts: payload.recentPosts,
  loading: payload.loading,
  error: payload.error,
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.RESPONSE_GET_POSTS]: getPosts,
});
