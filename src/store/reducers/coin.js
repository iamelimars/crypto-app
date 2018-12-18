import * as actionTypes from '../actions/actionTypes';

const initialState = {
    coin: {
        coinHistory:{},
        coinInfo:{}
    },
    loading: false
}

const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COIN_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_COIN_SUCCESS:
            return {
                coin: action.coin,
                loading: false
            }
        case actionTypes.FETCH_COIN_FAIL:
            return {
                ...state,
                loading: false
            }
    
        default:
            return state
    }
}

export default coinReducer