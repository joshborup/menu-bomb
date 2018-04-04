import React from 'react';

const Order = (props) => {
    return (
        <div className='individual-order' >
            <div>
                <img src={props.logo_url} />
                <h2>{props.name}</h2>
            </div>
            <div>
               Order Time: {props.order_time}
            </div>
            <div>
               Pickup Time: {props.pickup_time}
            </div>
            <div>
               Total:$ {props.total}
            </div>
        </div>
    );
};

export default Order;