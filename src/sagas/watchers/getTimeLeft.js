// import { call, put, take, fork, cancel, select, cancelled, race } from 'redux-saga/effects';
// import { eventChannel, END } from 'redux-saga';
// import { setTimeLeft, startTimer } from '../../actions';

// // const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// export const countdown = (secs) => {
//     return eventChannel(listener => {
//         const iv = setInterval(() => {
//             secs -= 1;
//             if (secs > 0) {
//                 listener(secs);
//             } else {
//                 listener(END);
//                 clearInterval(iv);
//             }
//         }, 1000);
//         return () => {
//             clearInterval(iv);
//         }
//     });
// }

// export function* getTimeLeft({ value }) {
//     const chan = yield call (countdown, value);

//     try {
//         while (true) {
//             let seconds = yield take(chan);
//             yield put(setTimeLeft(seconds));
//         }
//     } finally {
//         if (!(yield cancelled())) {
//             yield put('STOP');
//         }
//         chan.close()
//     }
// }

// export default function* watchGetTimeLeft() {
//     try {
//         while (true) {
//             const action = yield take(startTimer());
//             yield race([call(getTimeLeft, action), take('STOPPED_SAGA')])
//         }
//     } finally {
//         console.log('watchGetTimeLeft terminated')
//     }
// }