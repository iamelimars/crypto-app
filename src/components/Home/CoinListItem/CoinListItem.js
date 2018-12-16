import React from 'react'
import { Link } from 'react-router-dom';
import styles from './CoinListItem.css'

import numeral from 'numeral'


const coinListItem = ( props ) => {
    return (
        <div className="coins">
            <Link className={styles.coin} to={`/coin/${props.coin.id}`}>
                <div className={styles.wrapper}> 
                    <div className={styles.profile}>
                        {/* <img className={styles.logo} src={`https://www.cryptocompare.com${props.coin.CoinInfo.ImageUrl}`} alt="" width="23" height="23"/> */}
                        <img className={styles.logo} src={props.coin.iconUrl} alt="" width="23" height="23"/>
                        <span className={styles.name}>{props.coin.name}</span>
                    </div>
                    <div className={styles.price}>
                        {props.coin.price < 1 ? 
                            <span>{numeral(props.coin.price).format('$0,0.000')}</span>
                            :
                            <span>{numeral(props.coin.price).format('$0,0.00')}</span>
                            
                        }
                    </div>
                    <div className={styles.marketCap}>
                        <span>{numeral(props.coin.marketCap).format('($ 0.00 a)')}</span>
                    </div>
                    <div className={styles.change}>
                    { props.coin.change > 0 ?
                        <span className={styles.positive}>{props.coin.change}%</span> :
                        <span className={styles.negative}>{props.coin.change}%</span>
                    }
                    </div>
                    
                </div>
            </Link>
        </div>
    )
}

export default coinListItem