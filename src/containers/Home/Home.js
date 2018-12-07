import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actions';
import * as actions from '../../store/actions/index';

class Home extends Component {

    componentDidMount() {
        this.props.onfetchCoins()
    }

    render() {
        return(
            <div>
                <h1>Home</h1>
                {this.props.coins.map((coin) => (
                        <div>
                            {coin.CoinInfo.Name}
                            {coin.CoinInfo.FullName}
                        </div>

                    
                ))}
                <button onClick={this.onLoad}></button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        coins: state.coins
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onfetchCoins: () => dispatch(actions.fetchCoins())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)