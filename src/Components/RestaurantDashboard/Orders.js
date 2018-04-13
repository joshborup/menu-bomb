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

        console.log(this.props.info)
        return (
            <div>
                <div className='individual-orders'>
                    <div>
                        {this.props.info.total}
                    </div>
                    <div>
                        
                    </div>
                    <details>
                        {itemList}
                    </details>
                </div>
            </div>
        );
    }
}