import React, {Component} from 'react'
import styles from './CoinHeader.css'
import numeral from 'numeral'
import ScrollOut from "scroll-out";
import Splitting from "splitting";


class CoinHeader extends Component {

    componentDidMount() {
        Splitting();
        ScrollOut({  
            threshold: .2,
            once: false
          });
    }

    render() {
        return (
            <div className={styles.header} data-scroll>
                <span className={styles.symbol}>{this.props.coin.symbol}</span>
                <img className={styles.img} width="40px" height="40px" src={this.props.coin.iconUrl} alt=""/>
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