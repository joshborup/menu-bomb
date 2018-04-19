import React, { Component } from 'react';
import { fetchUserData } from '../../../redux/reducer';
import { connect } from 'react-redux';
import Orders from './Orders';
import axios from 'axios';
import Header from '../../Shared/Header';
import './orders.css'

class OrdersContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            orders: ''
        }
    }

    componentDidMount(){
        axios.get('/api/user-data').then(response => {
            console.log(response.data[0].customerid)
            axios.get(`/api/get-order-by-id?customerId=${response.data[0].customerid
            }`).then(orders => {
                console.log(orders)
                this.setState({
                    orders: orders.data
                })
            })
            //setting user session in redux
             this.props.fetchUserData(response.data[0])
        })
        
    }
    
    render() {
        console.log(this.state.orders)
        return (
            <div className='orders-container'>
                <Header />
                { this.props.user.user_type === 'customer' ? <Orders orders={this.state.orders} user={this.props.user}/> : <p>you need to register</p>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    fetchUserData: fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersContainer)