import { eventChannel, END } from 'redux-saga';
import { call, fork, put, take, cancelled, cancel } from 'redux-saga/effects';
import { updateCounter, countOver, counterStarted, counterPaused } from '../../actions';

const countdown = (secs) => {
    return eventChannel(emit => {
        const counter = setInterval(() => {
            secs -= 1;
            emit(secs >= 0 ? secs : END);
        }, 1000);

        return () => clearInterval(counter);
    });
}

function* countdownTask(secs) {
    const chan = yield call(countdown, secs);

    try {
        while (true) {
            const sec = yield take(chan);
            yield put(updateCounter(sec));
        }
    } finally {
        if (yield cancelled()) {
            chan.close();
        } else {
            yield put(countOver());
        }
    }
}

export default function* watchCountdown() {
    while (true) {
        const { secs } = yield take('START_COUNTER');
    
        const task = yield fork(countdownTask, 10);
        yield put(counterStarted());
    
        const { type } = yield take(['PAUSE_COUNTER', 'COUNT_OVER']);
        if (type === 'PAUSE_COUNTER') {
            yield cancel(task);
            yield put(counterPaused());
        }
    }
}
