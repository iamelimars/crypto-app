import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import Navbar from '../../components/Common/Navbar/Navbar'
import Sticky from '../../components/Home/StickyHeader/StickyHeader'
import CoinList from '../../components/Home/CoinList/CoinList'

class Home extends Component {

    componentDidMount() {
        this.props.onfetchCoins()
    }

    render() {
        return(
            <div>
                <Navbar />
                <Sticky />
                <CoinList coins={this.props.coins} />
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