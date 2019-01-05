import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { Link } from 'react-router-dom';

import styles from './Home.css'
import Navbar from '../../components/Common/Navbar/Navbar'
import Sticky from '../../components/Home/StickyHeader/StickyHeader'
import CoinList from '../../components/Home/CoinList/CoinList'
import Loading from '../../components/Common/Loading/Loading'
import Hero from '../../components/Home/Hero/Hero'
import Footer from '../../components/Common/Footer/Footer'
import ErrorPage from '../../components/Common/ErrorPage/ErrorPage'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false,
            heroCoins: []
        }
    }

    componentDidMount() {
        let topCoins = []
        this.props.onfetchCoins()
            .then(() => {
                if (this.props.errors === null) {
                    this.props.coins.slice(0, 4).map(i => {
                        topCoins = [...topCoins, i]
                        return null;
                    })
                    console.log(topCoins);
                    
                    this.setState({heroCoins: topCoins})
                }
                
            })
    }

    componentWillReceiveProps() {


    }

    menuClickedHandler = () => {
        if (this.state.menuOpen === false) {
            this.setState({
                menuOpen: true
            })
            document.body.classList.add(styles.noScroll);
            // document.getElementById('nav').style.width = "100%";
            document.getElementById('nav').style.height = "100%";
            document.getElementById('nav').style.opacity = "100";
        } else {
            this.setState({
                menuOpen: false
            })
            document.body.classList.remove(styles.noScroll);
            // document.getElementById('nav').style.width = "0%";
            document.getElementById('nav').style.height = "0%";
            document.getElementById('nav').style.opacity = "0";
        }

    }

    render() {
        if (this.props.error !== null) {
            return (
                <ErrorPage />
            )
        }
        return (
            <div>
                {this.props.loading ?
                    <Loading />
                    :
                    null
                }
                    <div>
                        <div id="nav" className={styles.overlay}>
                            <div className={styles.overlayContent}>
                                <Link onClick={this.menuClickedHandler} to="/">Home</Link>
                                <a onClick={this.menuClickedHandler} target="_blank" href="https://www.instagram.com/iamelimarss/">IG</a>
                                <a onClick={this.menuClickedHandler} target="_blank" href="https://github.com/iamelimars?tab=repositories">Github</a>
                            </div>
                        </div>
                        <Navbar menuStatus={this.state.menuOpen} menuClicked={() => this.menuClickedHandler()} />
                        <Hero coins={this.state.heroCoins} />
                        <Sticky />
                        {this.props.coins ?
                            <CoinList coins={this.props.coins} />
                            :
                            null
                        }
                        <Footer />
                    </div>

                    


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        coins: state.home.coins.coins,
        loading: state.home.loading,
        error: state.home.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onfetchCoins: () => dispatch(actions.fetchCoins())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)