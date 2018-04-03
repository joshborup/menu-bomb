import React, { Component } from 'react';
import LoginModal from './Components/Login/LoginModal'
import './reset.css'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="main">
        <LoginModal/>
      </div>
    );
  }
}

export default App;
