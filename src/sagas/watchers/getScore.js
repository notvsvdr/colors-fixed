import { put, take } from 'redux-saga/effects';
import { incrementScore } from '../../actions';

function* incrementScoreSaga() {
    yield put(incrementScore());
}

export default function* watchIncrementScoreSaga() {
    yield take('INCREMENT_SCORE_SAGA', incrementScoreSaga);
}