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
                </div>
                    <div className="restaurant-info">
                        <h1 className="restaurant-name">Amelio's Pizza, Pasta, and Wings</h1>
                        <p>A place for families to eat italian food in Phoenix.</p>
                    </div>
                    <div className="open-orders">
                        <h3 className="open-orders-subheader">Open Orders</h3>
                        <div className="open-orders-inner-container">
                            <div className="open-order-container">
                                <h4 className="open-order-item-name">Triple Play Sliders</h4>
                                <p className="open-order-customer">Customer: Jenny Smith</p>
                                <p className="open-order-notes">Notes: no pickles and double ketchup</p>
                                <button className="open-order-button">View Customer File</button>
                                <button className="open-order-button">Start Order</button>
                                <button className="open-order-button">Close Order</button>
                            </div>
                            <div className="open-order-container">
                                <h4 className="open-order-item-name">Triple Play Sliders</h4>
                                <p className="open-order-customer">Customer: Jenny Smith</p>
                                <p className="open-order-notes">Notes: no pickles and double ketchup</p>
                                <button className="open-order-button">View Customer File</button>
                                <button className="open-order-button">Start Order</button>
                                <button className="open-order-button">Close Order</button>
                            </div>
                            <div className="open-order-container">
                                <h4 className="open-order-item-name">Triple Play Sliders</h4>
                                <p className="open-order-customer">Customer: Jenny Smith</p>
                                <p className="open-order-notes">Notes: no pickles and double ketchup</p>
                                <button className="open-order-button">View Customer File</button>
                                <button className="open-order-button">Start Order</button>
                                <button className="open-order-button">Close Order</button>
                            </div>
                            <div className="open-order-container">
                                <h4 className="open-order-item-name">Triple Play Sliders</h4>
                                <p className="open-order-customer">Customer: Jenny Smith</p>
                                <p className="open-order-notes">Notes: no pickles and double ketchup</p>
                                <div className="open-order-buttons">
                                    <button className="open-order-button">View Customer File</button>
                                    <button className="open-order-button">Start Order</button>
                                    <button className="open-order-button">Close Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
  }
}

export default RestaurantDashboard;
