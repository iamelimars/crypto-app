import React from 'react'

import styles from './StickyHeader.css'


const stickyHeader = () => {
    return (
        <div className={styles.sticky} data-test="headerComponent">
            <div className={styles.wrapper}>
                <div className={styles.profile} data-test="headerSection">
                    <span >CRYPTOCURRENCY</span>
                </div>
                <div className={styles.price} data-test="headerSection">
                    <span>PRICE</span>
                </div>
                <div className={styles.marketCap} data-test="headerSection">
                    <span>MARKET CAP</span>
                </div>
                <div className={styles.change} data-test="headerSection">
                    <span>24H CHANGE</span>
                </div>
            </div>
        </div>
    )
}

export default stickyHeader