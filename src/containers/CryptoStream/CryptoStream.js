import React, { Component } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import styles from './CryptoStream.css'

import numeral from 'numeral'
import * as moment from 'moment'


let CRYPTOCOMPARE_API = "https://streamer.cryptocompare.com/";
let COINMARKET_API = "https://api.coinmarketcap.com/v1/ticker/";
let cryptoIO;


class Ticker extends Component {

  constructor() {
    super();
    this.state = {
      "coins": {},
      "subs": []
    };
  };

  componentWillMount() {
    // cryptoIO = io.connect(CRYPTOCOMPARE_API);
    console.log('mounting');
    // if (this.props.isLoading === false) {
      this.getAllCoins();
    // }
    
  };

  componentWillUnmount() {
    // io.removeAllListeners(CRYPTOCOMPARE_API)
    // cryptoIO.emit('SubRemove', { subs: this.state.subs } );
    console.log(cryptoIO);
    
    console.log('unmounting');
    
  }

  getAllCoins = () => {
    // Get all available coins from CoinMarketCap API.
    axios.get(COINMARKET_API).then((response) => {
      if (response.status === 200) {

        let coins = {};

        response.data.map((coin) => {
          coins[coin.symbol] = coin
          return null
        });

        this.setState({ "coins": coins });
        this.subscribeCryptoStream();
      };
    });
  }; 

  subscribeCryptoStream = () => {
    // Subscribe to CryptoCompare websocket API.

    let subs = [];
    cryptoIO = io.connect(CRYPTOCOMPARE_API);

    Object.keys(this.state.coins).map((key) => {
      return subs.push("5~CCCAGG~" + key + "~USD");
    });

    this.setState({"subs": subs})
    cryptoIO.emit("SubAdd", { "subs": subs });

    cryptoIO.on("m", (message) => {
      this.updateCoin(message);
    });
  };

  updateCoin = (message) => {
    // Update coin with recent data from CryptoCompare websocket API.

    message = message.split("~");
    let coins = Object.assign({}, this.state.coins);

    if ((message[4] === "1") || (message[4] === "2")) {

      if (message[4] === "1") {
        coins[message[2]].goUp = true;
        coins[message[2]].goDown = false;
      }
      else if (message[4] === "2") {
        coins[message[2]].goUp = false;
        coins[message[2]].goDown = true;
      }
      else {
        coins[message[2]].goUp = false;
        coins[message[2]].goDown = false;
      }

      coins[message[2]].price_usd = message[5];
      this.setState({ "coins": coins });


      /*
        Reset coin status after short interval. This is needed to reset
        css class of tick animation when coin's value goes up or down again.
      */
      setTimeout(() => {
        coins = Object.assign({}, this.state.coins)
        coins[message[2]].goUp = false
        coins[message[2]].goDown = false
        this.setState({ "coins": coins })
      }, 2000);

    };
  };

  getTickStyle = (coin) => {
    // Return css style based on coin status.
    if (coin.goUp) {
      return styles.tickGreen;
    } else if (coin.goDown) {
      return styles.tickRed;
    } else {
      return " ";
    }
  };

  render() {
    return (
      <div>
        <div className={styles.hero}>
          <div className={styles.container}>
            {Object.keys(this.state.coins).slice(0, 4).map((key, index) => {

              let coin = this.state.coins[key]

              return (
                  <div className={styles.coin} key={index}>
                    <span className={styles.title}>{coin.name}</span>
                    <div className={styles.price}>
                      <span className={this.getTickStyle(coin)}><span className={styles.price_symbol}>$</span>{numeral(coin.price_usd).format('0,0.00')} <span className={styles.price_info}>USD</span></span>
                    </div>
                    {/* <div>Last Updated - {moment(coin.last_updated).fromNow('s')}</div> */}
                    <span className={styles.market_cap_title}>Market Cap</span>
                    <span className={styles.market_cap}>{numeral(coin.market_cap_usd).format('$0,0.00')}</span>
                    {coin.percent_change_1h > 0 ?
                      <span className={styles.percent_green}>{coin.percent_change_1h}<span className={styles.percent_info}>%(1h)</span></span>
                    :
                      <span className={styles.percent_red}>{coin.percent_change_1h}<span className={styles.percent_info}>%(1h)</span></span>
                    }
                    
                    <span className={styles.rank}><span className={styles.rank_info}>Rank</span> {coin.rank}</span>
                  </div>
                 
              )
            })}
          </div>
        </div>
      </div>
    );
  };
};


export default Ticker;

 {/* <div key={index} className="col-4 col-sm-3 col-xl-2 p-0">
                    <div className={"stock " + this.getTickStyle(coin)}>
                      <p className="text-white m-0">{coin.symbol}</p>
                      <p className="text-white m-0">{coin.price_usd}</p>
                    </div>
                  </div> */}