import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

import Home from '../Home/Home'
import Coin from '../Coin/Coin'

import NoMatchFound from '../../components/Common/NoMatchFound/NoMatchFound'

class App extends Component {

  componentDidMount () {
    library.add(faIgloo)


  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/coin/:coin/:symbol" component={Coin} />
          {/* <Route path="/ticker" component={Ticker}/> */}
          <Route component={NoMatchFound} />
        </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;
