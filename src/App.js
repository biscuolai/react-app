import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Content from './components/Content';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Content text='test new component'></Content>
        <Counter />
      </div>
    );
  }
}

export default App;
