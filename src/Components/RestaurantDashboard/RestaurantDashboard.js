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
            return axios.get('/api/restaurant-profile-info')
        }

        function getUserInfo () {
            return axios.get('/api/restaurant-user-info')
        }
        
        function getOrderInfo() {
            return axios.get('/api/orders')
        }

    
        


        axios.all([getRestaurantInfo(), getUserInfo(), getOrderInfo()]).then(axios.spread((restInfo, userInfo, orderInfo) => {
            console.log(restInfo)
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
                    
                       
                    <div className="restaurant-dashboard-inner">
                        <div className="dashboard-main">
                            <div className="restaurant-info">
                            {this.state.restInfo ? <h1 className="restaurant-name"> {this.state.restInfo.restaurantName} </h1>: <div>Login to view restaurant dashboard</div>}
                                {/* <p>{this.state.restInfo.description}</p> */}
                                {/* <div className="restaurant-info-button">    
                                    <RaisedButton
                                        label="Restaurant Info"
                                        onClick={this.handleToggle}
                                    />
                                </div> */}
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
