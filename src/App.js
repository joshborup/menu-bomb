import React, { Component } from 'react';
import LoginModal from './Components/Login/LoginModal'
import routes from './routes'
import './reset.css'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="main">
        {routes}
      </div>
    );
  }
}

export default App;
