import { all, fork } from 'redux-saga/effects';

import watchGetColorsSaga from './watchers/getColors';
import watchGetTimeLeft from './watchers/getTimeLeft';

export default function* root() {
    yield all([
        fork(watchGetColorsSaga),
        // fork(watchGetTimeLeft)
    ]);
}