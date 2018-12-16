import * as actionTypes from './actionTypes'
import axios from 'axios'

export const fetchCoinSuccess = (coin) => {
    return {
        type: actionTypes.FETCH_COIN_SUCCESS,
        coin: coin
    }
}

export const fetchCoinFail = (error) => {
    return {
        type: actionTypes.FETCH_COIN_FAIL,
        error: error
    }
}

export const fetchCoinStart = () => {
    return {
        type: actionTypes.FETCH_COIN_START
    }
}

export const fetchCoin = (coin) => {
    return dispatch => {
        dispatch(fetchCoinStart())
        return axios.get(`https://min-api.cryptocompare.com/data/histominute?fsym=${coin}&tsym=USD&limit=1440`)
            .then( res => {
                // console.log(res.data);
                dispatch(fetchCoinSuccess(res.data))
            })
            .catch( err => {
                dispatch(fetchCoinFail(err))
            })
    }
}