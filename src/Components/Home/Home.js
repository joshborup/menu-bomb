import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {

  render() {
    return (
        <div className="home-container">
            <div className="home-inner-container">
                <div className="home-hero">
                    <h1 className="home-hero-text">Build your brand. Sell more food.</h1>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
