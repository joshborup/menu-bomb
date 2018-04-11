import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import styled from "styled-components";
import { connect } from 'react-redux';
import { fetchUserData, removeFromCart } from '../../redux/reducer';
import CartItem from './CartItem';
import currency from 'currency.js';
import axios from 'axios';

class Cart extends Component {

  constructor(props) {
    super(props)
    this.state = {
        open: false,
        user: '',
        cart: '',
        restaurant: ''
    };
  }

  componentDidMount(){
    axios.get(`/api/restaurant-name/${1}`).then(response => {
        console.log(response.data[0].name)
        this.setState({
            user: this.props.user,
            cart: this.props.cart,
            restaurant: response.data[0].name
       })
    })
   
    
}

    // resetCart = () => {
    //     this.setState({
    //         user: this.props.user,
    //         cart: this.props.cart
    //     })
    // }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    const CloseMenu = styled.div`
        position: absolute;
        right: 10px;
        top: 10px;
        width: 40px;
        padding-bottom: 5px;
        height: 40px;
        font-size: 20px;
        background: #d82313;
        border-radius: 50%;
        color: white;
        font-weight: bolder;
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: .5px .5px 1px black;
        box-shadow: 1px 2px 4px rgba(0,0,0,0.4);
        cursor: pointer;
    `

    const DrawerContainer = styled.div`
        padding: 60px 20px 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        height: 100%;
        z-index: 1;
    `

    const SubTitle = styled.div`
        font-size: 16px;
    `

    const Title = styled.h1`
        font-size: 24px;
        margin-bottom: 10px;
        font-family: Montserrat;
        font-weight: bolder;

    `

    const Bold = styled.span`
        font-weight: bold;
    `
    const TotalContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align_items: center;
        padding: 10px 0px;
        width:100%;
        min-height:100px;
    `

    const FlexRow = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0px;
    `

    const CheckoutTotalContainer = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
    `
    const CheckOutButton = styled.button`
        height: 30px;
        width: 120px;
        color: white;
        background:rgb(76, 233, 76);
        font-size: 16px;
        font-weight: bolder;
        margin: 0 auto;
        border: none;
        box-shadow: 1px 3px 5px rgba(0,0,0,0.4);
        border-radius: 3px;
        text-shadow: 0.5px 0.5px 1px black;
        cursor: pointer;
        &:focus {
            outline: none;
        }
        &:active {
            box-shadow: none;
        }
    `

    const CartStyle = {
        margin: '0 10px',
        cursor: 'pointer'
    }

    

    const cartItemList = this.props.cart.items ? this.props.cart.items.map(e => {
        return(
            <CartItem key={`${e.cartItemId}`} quantity={e.quantity} id={e.cartItemId} removeFromCart={this.props.removeFromCart} name={e.name} price={e.price}/>
        )

    }):'Loading...'

    console.log(this.props.cart.items)
    return (
      <div>
        <ShoppingCart
          onClick={this.handleToggle}
          style={CartStyle} color='#ffffff'
        />
        <Drawer docked={false} width={400} openSecondary={true} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <CloseMenu onClick={this.handleToggle}>x</CloseMenu>
            <DrawerContainer>
                <Title>Cart for {this.state.user.first_name}</Title>
                <SubTitle>{this.state.restaurant}</SubTitle>
                {cartItemList}  
                {/* ternary for showing cart or empty message based on cart status */}
                {
                this.state.cart.items == '' 
                ? 
                'Your cart is empty' 
                :
                <CheckoutTotalContainer>
                    <TotalContainer>
                        <FlexRow>
                            <Bold>SubTotal</Bold>{currency(this.props.cart.subTotal).format(true)}
                        </FlexRow>

                        <FlexRow>
                            <Bold>Tax</Bold>{currency(this.props.cart.salesTax).format(true)}
                        </FlexRow>
                        
                        <FlexRow>
                            <Bold>Total</Bold> {currency(this.props.cart.total).format(true)}
                        </FlexRow>
                    </TotalContainer>
                    <CheckOutButton>Checkout</CheckOutButton>
                </CheckoutTotalContainer>
                }
            </DrawerContainer>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cart: state.cart
    }
}

const mapDispatchToProps = {
    fetchUserData: fetchUserData,
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)