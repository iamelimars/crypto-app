import React from 'react'
import { Link } from 'react-router-dom';
import styles from './CoinListItem.css'


const coinListItem = ( props ) => {
    return (
        <div className="coins">
            <Link className={styles.coin} to={`/coin/${props.coin.CoinInfo.Internal}`}>
                <div className={styles.wrapper}> 
                    <div className={styles.profile}>
                        <img className={styles.logo} src={`https://www.cryptocompare.com${props.coin.CoinInfo.ImageUrl}`} alt="" width="23" height="23"/>
                        <span className={styles.name}>{props.coin.CoinInfo.FullName}</span>
                    </div>
                    <div className={styles.price}>
                        <span>{props.coin.DISPLAY.USD.PRICE}</span>
                    </div>
                    <div className={styles.marketCap}>
                        <span>{props.coin.DISPLAY.USD.MKTCAP}</span>
                    </div>
                    <div className={styles.change}>
                    { props.coin.RAW.USD.CHANGEPCT24HOUR > 0 ?
                        <span className={styles.positive}>{props.coin.DISPLAY.USD.CHANGEPCT24HOUR}%</span> :
                        <span className={styles.negative}>{props.coin.DISPLAY.USD.CHANGEPCT24HOUR}%</span>
                    }
                    </div>
                    
                </div>
            </Link>
        </div>
    )
}

export default coinListItem