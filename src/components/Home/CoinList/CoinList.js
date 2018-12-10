import React from 'react'
import CoinListItem from '../CoinListItem/CoinListItem';

const coinList = ( props ) => {
    return (
        <div className="coinList">
            {props.coins.map((coin) => (
                    <CoinListItem key={coin.CoinInfo.Id} coin={coin} />
                ))}
            
        </div>
    )
}

export default coinList