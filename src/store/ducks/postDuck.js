import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  getPosts: ['authorId', 'order'],
  responseGetPosts: [],
  responseGetAuthors: [],
});

/**
 * Handlers
 */

const INITIAL_STATE = {
  data: [],
  recentPosts: [],
  authors: [],
  loading: false,
  error: false,
};

const getPosts = (state = INITIAL_STATE, { payload }) => ({
  data: payload.data,
  recentPosts: payload.recentPosts,
  authors: payload.authors,
  loading: payload.loading,
  error: payload.error,
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.RESPONSE_GET_POSTS]: getPosts,
  [Types.RESPONSE_GET_AUTHORS]: getPosts,
});
