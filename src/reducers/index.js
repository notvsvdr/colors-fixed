const initialState = {
    colors: [],
    textColors: [],
    colorToGuess: '',
    timeLeft: 10,
    paused: true,
    score: 0
}

export const reducer = (state = initialState, { type, colors, textColors, colorToGuess, timeLeft }) => {
    switch (type) {
        case 'SET_COLORS':
            return {
                ...state,
                colors,
                textColors,
                colorToGuess
            }
        case 'START_COUNTER':
            return {
                ...state,
                timeLeft: timeLeft,
            }
        case 'UPDATE_COUNTER':
            return {
                ...state,
                timeLeft: timeLeft
            }
        case 'COUNTER_PAUSED':
            return {
                ...state,
                paused: true
            }
        case 'COUNT_OVER':
            return {
                ...state,
                paused: true,
                timeLeft: initialState.timeLeft,
            }
        case 'COUNTER_STARTED':
            return {
                ...state,
                paused: false,
                score: 0
            }
        case 'INCREMENT_SCORE':
            return {
                ...state,
                score: state.score + 1
            }
        default:
            return state;
    }
}