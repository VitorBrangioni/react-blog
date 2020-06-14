import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
    getPosts: [],
    // successGetPosts: [],
    // failureGetProfile: []
});

/**
 * Handlers
 */

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
};

const getPosts = (state = INITIAL_STATE, action) => ({
    data: action.payload.data, loading: false, error: false
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.GET_POSTS]: getPosts
});