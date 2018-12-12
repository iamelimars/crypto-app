import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Coin extends Component {

    componentDidMount() {
        this.props.onFetchCoin(this.props.match.params.coin)
        
        
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
                            data={[
                                {
                                    x:[1, 2, 3],
                                    y:[2, 6, 3],
                                    type: 'scatter',
                                    mode: 'lines',
                                    line: {color: 'green'},
                                }
                            ]}
                            layout={ {
                                width: '100%', 
                                height: '100%', 
                                paper_bgcolor: 'transparent',
                                plot_bgcolor: 'transparent',
                                scene: {
                                    xaxis: {
                                        title: '',
                                        autorange: true,
                                        showgrid: false,
                                        zeroline: false,
                                        showline: false,
                                        autotick: true,
                                        ticks: '',
                                        showticklabels: false
                                    },
                                    yaxis: {
                                        title: '',
                                        autorange: true,
                                        showgrid: false,
                                        zeroline: false,
                                        showline: false,
                                        autotick: true,
                                        ticks: '',
                                        showticklabels: false
                                    },
                                }
                            } }
                            config={ {displayModeBar: false} }
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