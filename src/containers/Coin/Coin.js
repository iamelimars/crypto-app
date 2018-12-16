import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import * as moment from 'moment';

const plotStyle = {
    margin: '0 auto',
    border: '1px solid black',
    // height: '85vh',
    // minHeight: '300px',
    maxWidth: '80vw',
    padding: '30px'
}

class Coin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            timeArray: [],
            closeArray: []
        }

    }






    componentDidMount() {
        let times = [];
        let closePrices = [];
        let time = "";

        this.props.onFetchCoin(this.props.match.params.coin)
            .then(() => {
                this.props.coin.Data.map(coinData => {
                    // Convert unix to time format
                    time = moment.unix(coinData.time).format("DD MMM H:mm A");

                    // Append to arrays
                    times = [...times, time];
                    closePrices = [...closePrices, coinData.close];
                })
            })
            .then(() => {
                this.setState({
                    timeArray: [...times],
                    closeArray: [...closePrices]
                })
                console.log(this.state);
            })

    }

    

    render() {
        return (
            <div>

                {this.props.loading ?
                    <div>Loading...</div>
                    :
                    <div>
                        {this.props.coin.TimeFrom}
                        <Plot 
                            style={plotStyle}
                            data={[
                                {
                                    x: this.state.timeArray,
                                    y: this.state.closeArray,
                                    type: 'scatter',
                                    mode: 'lines',
                                    line: { color: 'green' },
                                }
                            ]}
                            // layout={{
                            //     width: '100%',
                            //     height: '100%',
                            //     paper_bgcolor: 'transparent',
                            //     plot_bgcolor: 'transparent',
                            //     scene: {
                            //         xaxis: {
                            //             title: '',
                            //             autorange: true,
                            //             showgrid: false,
                            //             zeroline: false,
                            //             showline: false,
                            //             autotick: true,
                            //             ticks: '',
                            //             showticklabels: false
                            //         },
                            //         yaxis: {
                            //             title: '',
                            //             autorange: true,
                            //             showgrid: false,
                            //             zeroline: false,
                            //             showline: false,
                            //             autotick: true,
                            //             ticks: '',
                            //             showticklabels: false
                            //         },
                            //     }
                            // }}
                            config={{ displayModeBar: false, responsive: true }}
                        />
                    </div>


                }


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        coin: state.coin.coin,
        loading: state.coin.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchCoin: (coin) => dispatch(actions.fetchCoin(coin))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coin)