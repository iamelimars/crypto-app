import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import './App.css';

import Home from '../Home/Home'
import Coin from '../Coin/Coin'
import Ticker from '../CryptoStream/CryptoStream'
import NoMatchFound from '../../components/Common/NoMatchFound/NoMatchFound'

class App extends Component {

  componentDidMount () {
    
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/coin/:coin" component={Coin} />
        <Route path="/ticker" component={Ticker}/>
        <Route component={NoMatchFound} />
      </Switch>
    );
  }
}

export default App;
