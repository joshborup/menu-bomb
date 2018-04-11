import React from 'react';
import styled from "styled-components";
import currency from 'currency.js';
import DeleteButton from 'material-ui/svg-icons/action/delete';

const CartItem = (props) => {

    const Wrapper = styled.div`
        width: 100%;
        min-height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        border-top: lightgrey 1px solid;
        border-bottom: lightgrey 1px solid;
    `
    const Middle = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `
    const style = {
        cursor: "pointer",
        margin: "0 3px",
        color: 'lightgrey',
        
    }
    return (
        <Wrapper>

            <div>
                {props.quantity}
            </div>

            <Middle>
                {props.name}
                <DeleteButton style={style}  onClick={()=> {
                    props.removeFromCart(props.id)
                    props.resetCart()
                }}/>
            </Middle>

            <div>
                {currency(props.price).format(true)}
            </div>

        </Wrapper>
    );
};

export default CartItem;