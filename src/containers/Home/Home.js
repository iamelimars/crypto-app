import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Link } from 'react-router-dom';

import styles from './Home.css'
import Navbar from '../../components/Common/Navbar/Navbar'
import Sticky from '../../components/Home/StickyHeader/StickyHeader'
import CoinList from '../../components/Home/CoinList/CoinList'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false
        }
    }

    componentDidMount() {
        this.props.onfetchCoins()
    }

    menuClickedHandler = () => {
        if (this.state.menuOpen === false) {
            this.setState({
                menuOpen: true
            })
            document.body.classList.add(styles.noScroll);
            document.getElementById('nav').style.width = "100%";
            console.log('menu Open');
        } else {
            this.setState({
                menuOpen: false
            })
            document.body.classList.remove(styles.noScroll);
            document.getElementById('nav').style.width = "0%";
            console.log('menu closed');
        }

    }

    render() {
        return (
            <div>
                <div id="nav" className={styles.overlay}>
                    <div className={styles.overlayContent}>
                        <Link to="/">Home</Link>
                        <Link to="/">About</Link>
                        <Link to="/">Contact</Link>
                    </div>
                </div>
                <Navbar menuStatus={this.state.menuOpen} menuClicked={() => this.menuClickedHandler()} />
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