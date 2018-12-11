import React from 'react'

import styles from './StickyHeader.css'


const stickyHeader = () => {
    return (
        <div className={styles.sticky}>
            <div className={styles.wrapper}>
                <div className={styles.profile}>
                    <span >CRYPTOCURRENCY</span>
                </div>
                <div className={styles.price}>
                    <span>PRICE</span>
                </div>
                <div className={styles.marketCap}>
                    <span>MARKET CAP</span>
                </div>
                <div className={styles.change}>
                    <span>24H CHANGE</span>
                </div>
            </div>
        </div>
    )
}

export default stickyHeader