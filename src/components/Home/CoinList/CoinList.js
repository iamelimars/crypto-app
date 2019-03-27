import React from 'react'
import CoinListItem from '../CoinListItem/CoinListItem';

const coinList = ( props ) => {
    if (!props.coins) {
       return null
    }
    return (
        <div className="coinList" data-test="coinList">
            {props.coins.map((coin) => (
                    <CoinListItem key={coin.id} coin={coin} />
                ))}
            
        </div>
    )
}

export default coinList