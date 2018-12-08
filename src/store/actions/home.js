import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchCoinsSuccess = (coins) => {
    return {
        type: actionTypes.FETCH_COINS_SUCCESS,
        coins: coins
    }
}

export const fetchCoinsFail = (error) => {
    return {
        type: actionTypes.FETCH_COINS_FAIL,
        error: error
    }
}

export const fetchCoinsStart = () => {
    return {
        type: actionTypes.FETCH_COINS_START
    }
}


export const fetchCoins = () => {
    return dispatch => {
        dispatch(fetchCoinsStart())
        axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD&api_key=e4928b865771a7b00008cb9c1197540f3242e45bc1ce8dbc67fb9b627108a5c7')
            .then ( res => {
                console.log(res.data.Data);
                dispatch(fetchCoinsSuccess(res.data.Data))
            })
            .catch( err => {
                dispatch(fetchCoinsFail(err))
            })
    }
}