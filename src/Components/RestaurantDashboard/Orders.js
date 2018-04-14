import React, { Component } from 'react';
import axios from 'axios';
import OrderItem from './OrderItem';
import './orders.css'

export default class Orders extends Component {
    constructor(props){
        super(props)
        this.state = {
            items: ''
        }
    }

    componentDidMount(){
        axios.get(`/api/order-items?customerId=${this.props.info.customer_id}`).then(response => {
            
            this.setState({
                items: response.data
            })
        })
    }

    render() {


        const itemList = this.state.items ? this.state.items.map(e => {
            return(
                <OrderItem itemInfo={e} /> 
            )
        }): 'loading'

       const customerName = this.state.items[0] ? `${this.state.items[0].first_name} ${this.state.items[0].last_name}` : 'loading!'
         
       const phoneNumber = this.state.items[0] ? `${this.state.items[0].phone}` : 'loading!'

        return (
            <div className='indiv-order-container'>
                <div className='individual-orders'>
                    <div>
                       <span>Order #:</span>
                       <span className='bolder'>{this.props.info.id}</span>
                    </div>
                    <div>
                       <span>Order for: </span>
                       <span className='bolder'>{customerName}</span>
                    </div>
                    <div>
                       <span>Phone #: </span>
                       <span className='bolder'>{phoneNumber}</span>
                    </div>
                    <div>
                        <span>Order time:</span>
                        <span className='bolder'>{this.props.info.order_time}</span>
                    </div>
                    <div className='total-container'>
                        <span>SubTotal ${this.props.info.sub_total}</span>
                        <span>Sales Tax ${this.props.info.sales_tax}</span>
                        <span className='bolder'>Total ${this.props.info.total}</span>
                    </div>
                </div>
                <details>
                        <summary>Order Info</summary>
                        {itemList}
                </details>
            </div>
        );
    }
}