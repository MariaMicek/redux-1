import { createStore } from 'redux'

const initialState = {
    number: 0,
}

const reducer = (state = initialState, action) => {         //state = initailState - domyślny parametr, gdy nie ma innego
    console.log(state, action)
    if (action.type === 'INC') {
        return {
            ...state,
            number: state.number + 1
        }
    } else if (action.type === 'DEC'){
        return {
            ...state,
            number: state.number -1
        }
    }
}

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const incAction = {         //action to obiekt, który posiada type
    type: 'INC'
}

const decAction = {         //action to obiekt, który posiada type
    type: 'DEC'
}

store.dispatch(incAction)       //funkcja dispatch jest wywołana z akcją
store.dispatch(decAction)
