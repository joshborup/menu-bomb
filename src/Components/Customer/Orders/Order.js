import React from 'react';
import currency from 'currency.js';
const Order = (props) => {
    return (
        <div className='individual-order' >
            <div>
                <h2>{props.name}</h2>
            </div>
            <div>
               Order Time: {props.order_time}
            </div>
            <div>
               Pickup Time: {props.pickup_time}
            </div>
            <div>
               Total:{currency(props.total).format(true)}
            </div>
        </div>
    );
};

export default Order;