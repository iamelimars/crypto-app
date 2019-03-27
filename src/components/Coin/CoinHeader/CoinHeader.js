import React, { Component } from 'react'
import styles from './CoinHeader.css'
import numeral from 'numeral'
import ScrollOut from "scroll-out";
import Splitting from "splitting";
import { Link } from 'react-router-dom';



class CoinHeader extends Component {

    componentDidMount() {
        Splitting();
        ScrollOut({
            threshold: .2,
            once: false
        });
    }

    render() {
        if(!this.props.coin) {
            return null
        }
        return (
            <div className={styles.header} data-scroll data-test="coinHeaderContainer">
                <Link className={styles.back_btn} to="/">
                    <svg className={styles.back_btn_svg} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 129 129" enableBackground="new 0 0 129 129" width="30px" height="30px">
                        <g>
                            <path className={styles.svg_path} d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" fill="#FFFFFF" />
                        </g>
                    </svg>
                </Link>
                <span className={styles.symbol}>{this.props.coin.symbol}</span>
                <img className={styles.img} width="40px" height="40px" src={this.props.coin.iconUrl} alt="" />
                <span className={styles.name} >{this.props.coin.name}</span>
                <span className={styles.price}><span className={styles.sign}>$</span>{numeral(this.props.coin.price).format('0,0.00')}</span>

                {this.props.coin.change > 0 ?
                    <span className={styles.green}>+{this.props.coin.change}%</span>
                    :
                    <span className={styles.red}>{this.props.coin.change}%</span>
                }
            </div>
        )
    }

}

export default CoinHeader