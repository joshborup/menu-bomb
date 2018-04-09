import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import './../Login/loginModal.css';
import currency from 'currency.js';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/reducer';
import styled from "styled-components";

class DialogExampleModal extends Component {
constructor(props){
  super(props)
  this.state = {

  };
}

  

  render() {

    const Price = styled.h2`
      color: black;
      font-weight: bolder;
      margin: 5px 0px 10px;
    `;
    const AddButton = styled.button`
    margin: 10px;
    width: 140px;
    height: 30px;
    background:rgb(76, 233, 76);
    border: none;
    color: white;
    font-size: 16px;
    font-weight: bolder;
    border-radius: 2px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.4);
    text-shadow: .5px .5px 1px black;
    `;

    const customContentStyle = {
      width: '100%',
      maxWidth: '400px',
      textAlign:'center'
    };

    const titleStyle = {
      padding: '10px'
    }

    const imageStyle = {
      maxWidth: '350px',
      margin: '10px auto'
    }
    const buttonStyle = {
      margin: '10px',
      width: '140px',
      height: '30px',
      background:'rgb(76, 233, 76)',
      border: 'none',
      color: 'white',
      fontSize: '16px',
      fontWeight: 'bolder',
      borderRadius: '2px',
      outline: 'none',
      boxShadow: '1px 2px 3px rgba(0,0,0,0.4)'
    }

    console.log('selected item test _____________:', this.props.selectedItem)

    return (
      <div className='login-modal-container'>
        <Dialog
          title={this.props.selectedItem.name}
          modal={false}
          open={this.props.modalStatus}
          onRequestClose={this.props.handleClose}
          contentStyle={customContentStyle}
          titleStyle={titleStyle} 
        >
       
        <div className='menu-modal-content'>
          <div className='modal-menu'>
            <div>
              <img style={imageStyle} src={this.props.selectedItem.imageurl}/>
              <Price>{currency(this.props.selectedItem.price).format(true)}</Price>
              <h2>{this.props.selectedItem.description}</h2>
            </div>
            <AddButton onClick={() => this.props.addToCart(this.props.selectedItem)}> Add to Order </AddButton>
          </div>
        </div>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({ state: state });

export default connect( mapStateToProps, { addToCart})(DialogExampleModal);