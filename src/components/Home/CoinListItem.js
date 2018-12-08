import React from 'react'
import { Link } from 'react-router-dom';
import './CoinListItem.css'

const coinListItem = ( props ) => {
    return (
        <div className="coins">
            <Link className="coin" to={`/coin/${props.coin.CoinInfo.Internal}`}>
                <div className="coin__wrapper">
                    <div className="coin__profile">
                        <h4>{props.coin.CoinInfo.FullName}</h4>
                    </div>
                    <div className="coin__price">
                    
                    </div>
                    <div className="coin__marketcap">
                    
                    </div>
                    <div className="coin__change">
                    
                    </div>
                    
                </div>
            </Link>
        </div>
    )
}

export default coinListItem