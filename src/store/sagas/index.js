import { all, takeLatest } from 'redux-saga/effects';
import { getPosts } from './postsSaga';

export default function* root() {
  yield all([
    takeLatest('GET_POSTS', getPosts),
  ]);
}