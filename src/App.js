import React, { Component } from 'react';
import './reset.css'
import Modal from './components/login/Modal'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="main">
        <Modal/>
      </div>
    );
  }
}

export default App;
