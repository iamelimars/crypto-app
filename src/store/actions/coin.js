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

export const fetchCoin = (coin, symbol) => {
    return dispatch => {
        dispatch(fetchCoinStart())
        // return axios.get(`https://min-api.cryptocompare.com/data/histominute?fsym=${coin}&tsym=USD&limit=1440`)
            // return axios.get(`https://api.coinranking.com/v1/public/coin/${coin}/history/24h?base=USD`)
            return axios.all([
                axios.get(`https://api.coinranking.com/v1/public/coin/${coin}/history/24h?base=USD`),
                axios.get(`https://api.coinranking.com/v1/public/coin/${coin}?base=USD&timePeriod=24h`),
                axios.get(`https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${symbol}&tsym=USD`)
            ])
            // .then( res => {
            //     // console.log(res.data.data);
            //     dispatch(fetchCoinSuccess(res.data.data))
            // })
            .then(axios.spread((resHistory, resData, resFullData) => {
                console.log(resHistory.data.data);
                console.log(resData.data.data);
                console.log(resFullData.data.Data);
                

                let data = {
                    coinHistory: resHistory.data.data,
                    coinInfo: resData.data.data,
                    coinFullData: resFullData.data.Data,
                }
                dispatch(fetchCoinSuccess(data))
                
            }))
            .catch( err => {
                dispatch(fetchCoinFail(err))
            })
    }
}