import React from 'react'
import styles from './CoinHeader.css'
import numeral from 'numeral'

const coinHeader = (props) => {
    return (
        <div className={styles.header}>
            <span className={styles.symbol}>{props.coin.symbol}</span>
            <img className={styles.img} width="30px" height="30px" src={props.coin.iconUrl} alt=""/>
            <span className={styles.name}>{props.coin.name}</span>
            <span className={styles.price}><span className={styles.sign}>$</span>{numeral(props.coin.price).format('0,0.00')}</span>

            <span>{props.coin.change}%</span>
        </div>
    )
}

export default coinHeader