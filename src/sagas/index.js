import { all, fork } from 'redux-saga/effects';

import watchGetColorsSaga from './watchers/getColors';
import watchCountdown from './watchers/getTimeLeft';

export default function* root() {
    yield all([
        fork(watchGetColorsSaga),
        fork(watchCountdown)
    ]);
}