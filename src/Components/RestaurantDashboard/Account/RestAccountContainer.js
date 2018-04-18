import React, { Component } from 'react';
import RestAccount from './RestAccount';
import Header from '../../Shared/Header';
import axios from 'axios';

export default class RestAccountContainer extends Component {
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

    render() {
        return (
            <div>
                <Header />
                <RestAccount />
            </div>
        );
    }
}