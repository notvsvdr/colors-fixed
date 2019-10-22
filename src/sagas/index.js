import { all, fork } from 'redux-saga/effects';

import watchGetColorsSaga from './watchers/getColors';
import watchCountdown from './watchers/getTimeLeft';
import watchIncrementScoreSaga from './watchers/getScore';

export default function* root() {
    yield all([
        fork(watchGetColorsSaga),
        fork(watchCountdown),
        fork(watchIncrementScoreSaga)
    ]);
}