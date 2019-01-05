import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import * as moment from 'moment';
import numeral from 'numeral'
import ScrollOut from "scroll-out";


import CoinChart from '../../components/Coin/CoinChart/CoinChart'
import CoinHeader from '../../components/Coin/CoinHeader/CoinHeader'
import CoinBody from '../../components/Coin/CoinBody/CoinBody'
import Loading from '../../components/Common/Loading/Loading'
import Footer from '../../components/Common/Footer/Footer'



class Coin extends Component {

    constructor(props) {
        super(props);


        this.state = {
            timeArray: [],
            closeArray: [],
            chartData: {

            },
            chartOptions: {}
        }

    }

    componentDidMount() {

        ScrollOut();


        let times = [];
        let closePrices = [];
        let time = "";
        let price
        let data
        let dataArray = []
        let currentObj = {}

        this.props.onFetchCoin(this.props.match.params.coin, this.props.match.params.symbol)
            .then(() => {
                console.log(this.props.coinFullData);
                
                this.props.coin.map(coinData => {
                    // time = moment(coinData.timestamp).format("DDD hh:mm a");
                    time = moment(coinData.timestamp).format("X");


                    price = numeral(coinData.price).format('0,0.00');

                    // times = [...times, time];
                    times = [...times, coinData.timestamp]
                    closePrices = [...closePrices, price];

                    currentObj = {
                        x: time,
                        y: coinData.price
                    }

                    dataArray = [...dataArray, currentObj]

                    return dataArray;

                })
            })
            .then(() => {
                data = (canvas) => {
                    const ctx = canvas.getContext("2d");
                    const gradient = ctx.createLinearGradient(1000, 0, 100, 0);
                    gradient.addColorStop(0, 'rgba(250,117,177, 1) ');
                    gradient.addColorStop(1, 'rgba(143,123,229, 1) ');

                    return {
                        datasets: [
                            {
                                label: 'Price',
                                data: dataArray,
                                backgroundColor: 'transparent',
                                // backgroundColor: gradient,
                                borderColor: gradient,
                                bezierCurve: true,
                                pointBackgroundColor: "transparent",
                                pointBorderColor: "transparent",
                                pointHoverBackgroundColor: "rgba(255,255,255,1)",
                                pointHoverBorderColor: "rgba(255,255,255,1)",
                            }
                        ]
                    }
                }
            })
            .then(() => {
                this.setState({
                    timeArray: [...times],
                    closeArray: [...closePrices],
                    chartData: data
                })
                console.log(times);

            })
    }

    render() {
        return (
            <div>
                {!this.props.coinInfo ?
                    <Loading />
                    :
                    <div>
                        {this.props.loading ?
                            <Loading />
                            :
                            <div>
                                <CoinHeader coin={this.props.coinInfo} data-scroll />
                                <CoinChart data={this.state.chartData} />
                                <CoinBody coin={this.props.coinInfo} coinFullData={this.props.coinFullData} />
                                <Footer />
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        coin: state.coin.coin.coinHistory.history,
        coinInfo: state.coin.coin.coinInfo.coin,
        coinFullData: state.coin.coin.coinFullData,
        loading: state.coin.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCoin: (coin, symbol) => dispatch(actions.fetchCoin(coin, symbol))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coin)




