import { delay } from 'redux-saga';
import { takeLatest, takeEvery, put, call, select, all } from 'redux-saga/effects';
import { Types } from '../ducks/postDuck'
import PostsController from "../../controllers/PostsController";

export function* getPosts() {
    try {
        const response = yield call(function () {
            return PostsController.getPosts();
        });

        yield put({ type: 'GET_POSTS', payload: { data: response, loading: false } });
    } catch (err) {
        console.log(err);
        // yield put({ type: 'FAILURE_GET_PROFILE' });
    }
}