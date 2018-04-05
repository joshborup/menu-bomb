import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './RestaurantDashboard.css';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import SvgIcon from 'material-ui';

class RestaurantDashboard extends Component {

  render() {
    return (
        <div className="restaurant-dashboard-container">
            <Header />
                <div className="restaurant-dashboard-inner">
                    <div className="restaurant-info">
                        <h1 className="restaurant-name">Test Restaurant</h1>
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
