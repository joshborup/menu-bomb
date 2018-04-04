import React from 'react';
import Order from './Order'

const Orders = (props) => {

    const listOrders = props.orders ? props.orders.map((e) => {
        return (
            <Order 
                name={e.name}
                logo_url={e.logo_url}
                pickup_time={e.pickup_time}
                order_time={e.order_time}
                total={e.total}
            />
        )
    }): ''
    return (
        <div class='orders-display'>
            <div>
                <div>
                    <h1>Orders</h1>
                    {props.user.email}
                </div>
                <div className='open-orders'>
                    {listOrders}
                </div>
            </div>
        </div>
    );
};

export default Orders;