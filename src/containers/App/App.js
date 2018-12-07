import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Home from '../Home/Home'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cryptos: []
    } 
  }

  componentDidMount() {
    // axios.get('https://min-api.cryptocompare.com/data/top/mktcap?limit=100&tsym=USD&api_key=e4928b865771a7b00008cb9c1197540f3242e45bc1ce8dbc67fb9b627108a5c7')
    //     .then((res) => {
    //       console.log(res.data.Data[0]);
    //       const cryptos = res.data.Data;
    //       this.setState({cryptos: cryptos})
    //     })
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
