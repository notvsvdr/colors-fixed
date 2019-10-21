import { put, takeLatest, call } from 'redux-saga/effects';
import { setColors } from '../../actions';

const getColors = async () => {
    const response = await fetch('http://localhost:8080/colors'); // run 'node server.js' and disable CORS
    return response.json();
}

function* workerGetColorsSaga() {
    const colors = yield call(getColors);
    yield put(setColors(colors));
}

export default function* watchGetColorsSaga() {
    yield takeLatest('GET_COLORS_SAGA', workerGetColorsSaga);
}