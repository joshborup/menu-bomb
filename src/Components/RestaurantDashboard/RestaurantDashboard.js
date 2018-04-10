import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './RestaurantDashboard.css';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import SvgIcon from 'material-ui';
import './RestaurantDashboard.css';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

class RestaurantDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
      }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

  render() {
    return (
        <div className="restaurant-dashboard-container">
            <Header />
                    
                            <Drawer
                                docked={false}
                                width={300}
                                open={this.state.open}
                                onRequestChange={(open) => this.setState({open})}>
                                <div className="dashboard-left-panel">
                                    <div className="dashboard-info">
                                        <div className="dashboard-panel-info panel-name"><span className="bold-text">Business Name: </span>Amelio's Pizza, Pasta, and Wings</div>
                                        <div className="dashboard-panel-info panel-description"><span className="bold-text">Business Description: </span>A place for families to eat italian food in Phoenix.</div>
                                        <div className="dashboard-panel-info panel-address"><span className="bold-text">Street Address: </span>123 Main Street</div>
                                        <div className="dashboard-panel-info panel-address"><span className="bold-text">City, State, Zip: </span>Phoenix, AZ 85255</div>
                                        <div className="dashboard-panel-info panel-hours"><span className="bold-text">Business Hours: </span>Tuesday-Sunday 12-8pm</div>
                                    </div>    
                                        <div className="panel-buttons">
                                            <button className="panel-button" onClick={this.handleClose}>Close</button>
                                            <button className="panel-button" onClick={this.handleClose}>Edit Restaurant Info</button>
                                        </div>
                                </div>
                            </Drawer>
                    <div className="restaurant-dashboard-inner">
                        <div className="dashboard-main">
                            <div className="restaurant-info">
                                <h1 className="restaurant-name">Amelio's Pizza, Pasta, and Wings</h1>
                                <p>A place for families to eat italian food in Phoenix.</p>
                                <div className="restaurant-info-button">    
                                    <RaisedButton
                                        label="Restaurant Info"
                                        onClick={this.handleToggle}
                                    />
                                </div>
                            </div>
                            <div className="open-orders">
                                <h3 className="open-orders-subheader">Open Orders</h3>
                                <div className="open-orders-inner-container">
                                    <div className="open-order-container">
                                        <div className="open-order-text">
                                            <h4 className="open-order-item-name">Triple Play Sliders</h4>
                                            <p className="open-order-customer">Customer: Jenny Smith</p>
                                            <p className="open-order-customer-phone">Customer Phone Number: 555-555-5555</p>
                                            <p className="open-order-notes">Notes: no pickles and double ketchup. Make the bun extra fluffy and the ketchup swirl in a counter clockwise pattern. THANKS</p>
                                        </div>
                                        <div className="open-order-buttons">
                                            <button className="open-order-button view-customer-file-button">View Customer File</button>
                                            <button className="open-order-button start-order-button">Start Order</button>
                                            <button className="open-order-button close-order-button">Close Order</button>
                                        </div>
                                    </div>
                                    <div className="open-order-container">
                                    <div className="open-order-text">
                                            <h4 className="open-order-item-name">Triple Play Sliders</h4>
                                            <p className="open-order-customer">Customer: Jenny Smith</p>
                                            <p className="open-order-customer-phone">Customer Phone Number: 555-555-5555</p>
                                            <p className="open-order-notes">Notes: no pickles and double ketchup. Make the bun extra fluffy and the ketchup swirl in a counter clockwise pattern. THANKS</p>
                                        </div>
                                        <div className="open-order-buttons">
                                            <button className="open-order-button view-customer-file-button">View Customer File</button>
                                            <button className="open-order-button start-order-button">Start Order</button>
                                            <button className="open-order-button close-order-button">Close Order</button>
                                        </div>
                                    </div>
                                    <div className="open-order-container">
                                    <div className="open-order-text">
                                            <h4 className="open-order-item-name">Triple Play Sliders</h4>
                                            <p className="open-order-customer">Customer: Jenny Smith</p>
                                            <p className="open-order-customer-phone">Customer Phone Number: 555-555-5555</p>
                                            <p className="open-order-notes">Notes: no pickles and double ketchup. Make the bun extra fluffy and the ketchup swirl in a counter clockwise pattern. THANKS</p>
                                        </div>
                                        <div className="open-order-buttons">
                                            <button className="open-order-button view-customer-file-button">View Customer File</button>
                                            <button className="open-order-button start-order-button">Start Order</button>
                                            <button className="open-order-button close-order-button">Close Order</button>
                                        </div>
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
