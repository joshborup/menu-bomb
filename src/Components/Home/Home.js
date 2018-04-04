import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Home.css';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';

class Home extends Component {

  render() {
    return (
        <div className="home-container">
        <Header />
            <div className="home-inner-container">
                <div className="home-hero">
                    <h1 className="home-hero-text">Build your brand. Sell more food.</h1>
                </div>
                <div className="home-content">
                    <div className="home-content-text-1">Menu Bomb is a cutting edge web service helping restaurants succeed in a competitive market</div>
                    <div className="home-content-text-2">Restaurants can manage their online presence by leveraging our Menu Builder feature</div>
                </div>
                <div className="home-content">
                    <div className="home-content-text-3">Customers can browse a restaurant's online menu and place orders for take out</div>
                    <div className="home-content-text-4">Restaurant staff can view and manage orders placed online through the convenient Restaurant Dashboard</div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default Home;
