import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import styled from "styled-components";
import { connect } from 'react-redux';
import { fetchUserData } from '../../redux/reducer';

class Cart extends Component {

  constructor(props) {
    super(props)
    this.state = {
        open: false,
        user: ''
    };
  }

  componentDidMount(){
   this.setState({
       user: this.props.user
   })
    
}

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
        padding: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        height: 100%;
        z-index: 1;
    `

    const Title = styled.h1`
        font-size: 20px;
        font-family: Montserrat;
        font-weight: bolder;

    `

    const CartStyle = {
        margin: '0 10px'
    }

    console.log(this.state.user)
    return (
      <div>
        <ShoppingCart
          onClick={this.handleToggle}
          style={CartStyle} color='#ffffff'
        />
        <Drawer width={400} openSecondary={true} open={this.state.open} >
            <CloseMenu onClick={this.handleToggle}>x</CloseMenu>
            <DrawerContainer>
                <Title>Cart for {this.props.user.first_name}</Title>
                
            </DrawerContainer>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    fetchUserData: fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)