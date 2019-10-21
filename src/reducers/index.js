const initialState = {
    colors: [],
    timeLeft: 10
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_COLORS':
            return {
                ...state,
                colors: action.colors
            }
        default:
            return state;
    }
}