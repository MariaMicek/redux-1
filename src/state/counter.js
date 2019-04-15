const initialState = {
    number: 0,
}

const INC = 'counter/INC'
const DEC = 'counter/DEC'

export const incActionCreator = () => ({
    type: INC
})

export const decActionCreator = () => ({
    type: DEC
})

export default (state = initialState, action) => {      //reducer jako export domyślny
    if (action.type === INC) {
        return {
            ...state,
            number: state.number + 1
        }
    }
    if (action.type === DEC) {
        return {
            ...state,
            number: state.number - 1
        }
    }
    return state     //!!! gdyby żaden warunek nie został spełniony, trzeba zwrocić niezmieniony stan
}