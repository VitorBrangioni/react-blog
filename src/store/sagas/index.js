import { delay } from 'redux-saga';
import { takeLatest, takeEvery, put, call, select, all } from 'redux-saga/effects';
import { Types } from '../ducks/postDuck';
import { getPosts } from './postsSaga';


export default function* root() {
  yield all([
    takeLatest('GET_POSTS', getPosts),
  ]);
}