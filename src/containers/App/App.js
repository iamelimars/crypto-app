import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import './App.css';

import Home from '../Home/Home'
import Coin from '../Coin/Coin'

class App extends Component {

  componentDidMount () {
    
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/coin/:coin" component={Coin} />
      </Switch>
    );
  }
}

export default App;
