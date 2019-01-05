import * as actionTypes from '../actions/actionTypes';

const initialState = {
    coins: [],
    loading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COINS_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case actionTypes.FETCH_COINS_SUCCESS:
            return {
                ...state,
                coins:action.coins,
                loading: false,
                error: null
            }
        case actionTypes.FETCH_COINS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer