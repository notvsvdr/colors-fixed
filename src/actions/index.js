export const setColors = (data) => ({
    type: 'SET_COLORS',
    colors: data.colors,
    textColors: data.textColors,
    colorToGuess: data.colorToGuess
});

export const getColorsSaga = () => ({
    type: 'GET_COLORS_SAGA'
});

export const startCounter = (secs) => ({
    type: 'START_COUNTER',
    timeLeft: secs
})
export const counterStarted = () => ({
    type: 'COUNTER_STARTED',
});

export const updateCounter = (secs) => ({
    type: 'UPDATE_COUNTER',
    timeLeft: secs
});

export const counterPaused = () => ({
    type: 'COUNTER_PAUSED'
})

export const countOver = () => ({
    type: 'COUNT_OVER'
});