import React, { Component } from 'react';
import logo from './logo.svg';
import bgImg from '../static/img/bg.jpg';
import detail from './public/bg1.jpg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={bgImg} alt="bg_img" />
        <img src={detail} alt="detail" />
      </div>
    );
  }
}

export default App;
