import React from 'react';

const OrderItem = (props) => {
    return (
        <div className='individual-order-item'>
            <div className='item-image-container'>
                <img src={props.itemInfo.image_url} />
            </div>
            <div>
                <span>Item</span>
                {props.itemInfo.name}
                <span></span>
            </div>
            <div>
                <span>Item description</span>
                {props.itemInfo.description}
                <span></span>
            </div>
            <div>
                <span>Item Price</span>
                {props.itemInfo.price}
                <span></span>
            </div>
            <div>
                <span>Instructions</span>
                {props.itemInfo.notes}
                <span></span>
            </div>
            <div>
                <span>Qty.</span>
                {props.itemInfo.quantity}
                <span></span>
            </div>
        </div>
    );
};

export default OrderItem;