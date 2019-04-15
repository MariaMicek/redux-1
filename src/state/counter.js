const initialState = {
    number: 0,
}

export const incActionCreator = () => ({
    type: 'INC'
})

export const decActionCreator = () => ({
    type: 'DEC'
})

export const reducer = (state = initialState, action) => {
    console.log(state, action)
    if (action.type === 'INC') {
        return {
            ...state,
            number: state.number + 1
        }
    }
    if (action.type === 'DEC') {
        return {
            ...state,
            number: state.number - 1
        }
    }
}