import * as actionTypes from '../actions/actionTypes';

const initialState = {
    coins: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COINS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_COINS_SUCCESS:
            return {
                ...state,
                coins:action.coins,
                loading: false
            }
        case actionTypes.FETCH_COINS_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default reducer