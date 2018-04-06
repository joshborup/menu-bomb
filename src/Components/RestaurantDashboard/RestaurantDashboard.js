import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './RestaurantDashboard.css';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import SvgIcon from 'material-ui';
import './RestaurantDashboard.css';

class RestaurantDashboard extends Component {

  render() {
    return (
        <div className="restaurant-dashboard-container">
            <Header />
                <div className="restaurant-dashboard-inner">
                <div className="dashboard-left-panel">
                <p className="dashboard-panel-info">123 Main Street</p>
                <p className="dashboard-panel-info">Phoenix, AZ 85255</p>
                <p className="dashboard-panel-info">M-F 6am to 6pm</p>
                <p className="dashboard-panel-info">S & S 10am to 11pm</p>
                </div>
                    <div className="restaurant-info">
                        <h1 className="restaurant-name">Amelio's Pizza, Pasta, and Wings</h1>
                        <p>A </p>
                    </div>
                    <div className="open-orders">
                    </div>
                </div>
            <Footer />
        </div>
    );
  }
}

export default RestaurantDashboard;
