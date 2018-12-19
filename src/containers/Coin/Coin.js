import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import * as moment from 'moment';
import numeral from 'numeral'
import { Line } from 'react-chartjs-2'

import CoinHeader from '../../components/Coin/CoinHeader/CoinHeader'



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


        let times = [];
        let closePrices = [];
        let time = "";
        let price
        let data
        let dataArray = []
        let currentObj = {}




        this.props.onFetchCoin(this.props.match.params.coin)
            .then(() => {
                this.props.coin.map(coinData => {
                    time = moment(coinData.timestamp).format("d h:mm a");

                    price = numeral(coinData.price).format('0,0.00');

                    times = [...times, time];
                    // times = [...times, coinData.timestamp]
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
                console.log(this.props.coinInfo.iconUrl);

            })
    }

    render() {
        return (
            <div>
                {!this.props.coinInfo ?
                    <div></div>
                    :
                    <div>
                        {this.props.loading ?
                            <div>Loading...</div>
                            :
                            <div >
                                <div>
                                    <CoinHeader coin={this.props.coinInfo} />
                                </div>
                                <Line

                                    data={this.state.chartData}
                                    width={100}
                                    height={40}
                                    options={{
                                        maintainAspectRatio: true,
                                        responsive: true,
                                        title: {
                                            display: false,
                                            text: "Time scale"
                                        },
                                        tooltips: {
                                            mode: 'index',
                                            intersect: false,
                                        },
                                        hover: {
                                            mode: 'index',
                                            intersect: false
                                        },
                                        scales: {
                                            xAxes: [{

                                                type: 'time',
                                                bounds: 'ticks',
                                                distribution: 'series',
                                                gridLines: {
                                                    display: false
                                                },
                                                time: {
                                                    displayFormats: {
                                                        'millisecond': 'h:mm a',
                                                        'second': 'h:mm a',
                                                        'minute': 'h:mm a',
                                                        'hour': 'h:mm a',
                                                        'day': 'h:mm a',
                                                        'week': 'h:mm a',
                                                        'month': 'h:mm a',
                                                        'quarter': 'h:mm a',
                                                        'year': 'h:mm a',

                                                    },
                                                    unit: 'minute',
                                                    round: 'minute',
                                                    parser: 'd h:mm a',
                                                    tooltipFormat: 'MMM Do h:mm A',

                                                },
                                                ticks: {
                                                    source: 'auto',
                                                    autoSkip: true,
                                                    maxTicksLimit: 8
                                                }
                                            }],
                                            yAxes: [{
                                                display: false,
                                                gridLines: {
                                                    display: false
                                                },
                                                scaleLabel: {
                                                    display: true,
                                                    labelString: 'Price'
                                                }
                                            }]
                                        }
                                    }}
                                />
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
        loading: state.coin.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCoin: (coin) => dispatch(actions.fetchCoin(coin))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coin)




