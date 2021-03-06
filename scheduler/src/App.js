import React, { Component } from 'react';
import Main from './components/MainComponents';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Main />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
