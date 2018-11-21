import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import Sidebar from "./components/sidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="Posts">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    );
  }
}

export default App;
