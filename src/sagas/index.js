import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

import {
    GET_QUESTION_REQUESTED,
    isLoading,
    getQuestionSuccess
} from '../actions/questions';

function* getQuestion() {
    yield put(isLoading(true));

    const data = yield axios.get('https://opentdb.com/api.php?amount=1');

    yield put(isLoading(false));

    console.log(data.data);
    if (data && data.data) {
        yield put(getQuestionSuccess(data.data.results[0]));
    }
}

export function* mySaga() {
    yield takeEvery(GET_QUESTION_REQUESTED, getQuestion);
}