import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends Component {

  render() {
    return (
        <div className="home-container">
            <div className="home-inner-container">
                <h1 className="home-hero-text">Build your brand.</h1>
                <h1 className="home-hero-text">Sell more food.</h1>
            </div>
        </div>
    );
  }
}

export default Home;
