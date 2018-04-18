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
import Orders from './Orders'

class RestaurantDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            restInfo: "",
            userInfo: "",
            orderInfo: '',
            items: ''
        };
      }

    componentDidMount() {
        console.log("component did mount");
        function getRestaurantInfo () {
            return axios.get('/api/restaurant-info')
        }

        function getUserInfo () {
            return axios.get('/api/restaurant-user-info')
        }
        
        function getOrderInfo() {
            return axios.get('/api/orders')
        }


        axios.all([getRestaurantInfo(), getUserInfo(), getOrderInfo()]).then(axios.spread((restInfo, userInfo, orderInfo) => {
            this.setState({
                restInfo: restInfo.data, 
                userInfo: userInfo.data[0],
                orderInfo: orderInfo.data,
                
            });
            console.log("state", this.state);
        }))
    }

    handleToggle = () => this.setState({open: !this.state.open});

    handleClose = () => this.setState({open: false});

  render() {

    const openOrders = this.state.orderInfo ? this.state.orderInfo.map(e => {
        return(
            <Orders info={e} />
        )
    
    }): 'Loading...'
    
    return (
        <div className="restaurant-dashboard-container">
            <Header />
                    
                            <Drawer
                                docked={false}
                                width={380}
                                open={this.state.open}
                                onRequestChange={(open) => this.setState({open})}>
                                <div className="dashboard-left-panel">
                                    <div className="dashboard-info">
                                        <div className="dashboard-panel-info panel-name"><span className="bold-text">Business Name: </span>{this.state.restInfo ? this.state.restInfo[0].name : <div>[Restaurant Name]</div>}</div>
                                        <div className="dashboard-panel-info panel-description"><span className="bold-text">Business Description: </span>{this.state.restInfo ? this.state.restInfo[0].description : <div>[Restaurant Description]</div>}</div>
                                        {/* <div className="dashboard-panel-info panel-address"><span className="bold-text">Street Address: </span>{this.state.restInfo ? this.state.restInfo[0].name : <div>[Restaurant Name]</div>}</div>
                                        <div className="dashboard-panel-info panel-address"><span className="bold-text">City, State, Zip: </span>{this.state.restInfo}</div> */}
                                        <div className="dashboard-panel-info panel-hours"><span className="bold-text">Business Hours: </span>{this.state.restInfo ? this.state.restInfo[0].open_time : <div>[Restaurant Hours]</div>}</div>
                                        <div className="dashboard-panel-info panel-hours"><span className="bold-text">Contact Person: </span>{this.state.userInfo ? this.state.userInfo.first_name : <div>[Contact Person]</div>}{this.state.userInfo ? this.state.userInfo.last_name : <div></div>}</div>
                                        <div className="dashboard-panel-info panel-hours"><span className="bold-text">Contact Number: </span>{this.state.userInfo ? this.state.userInfo.phone : <div>[Contact Phone Number]</div>}</div>
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
                            {this.state.restInfo ? <h1 className="restaurant-name"> {this.state.restInfo[0].name} </h1>: <div>Login to view restaurant dashboard</div>}
                                <p>{this.state.restInfo.description}</p>
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
                                        {openOrders}
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
