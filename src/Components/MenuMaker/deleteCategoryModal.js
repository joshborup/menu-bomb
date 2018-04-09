import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import './../Login/loginModal.css';
import currency from 'currency.js';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/reducer';
import styled from "styled-components";

export default class DialogExampleModal extends Component {
constructor(props){
  super(props)
  this.state = {

  };
}

  render() {
  
    const DeleteButton = styled.button`
    margin: 10px;
    width: 140px;
    height: 30px;
    background: rgb(250, 14, 14);
    border: none;
    color: white;
    font-size: 16px;
    font-weight: bolder;
    border-radius: 2px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.4);
    text-shadow: .5px .5px 1px black;
    `;

    const CancelButton = styled.button`
    margin: 10px;
    width: 140px;
    height: 30px;
    background: rgb(14, 250, 14);
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
      background: 'rgb(250, 14, 14)',
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
          title={this.props.categoryName}
          modal={false}
          open={this.props.modalStatus}
          onRequestClose={this.props.handleClose}
          contentStyle={customContentStyle}
          titleStyle={titleStyle} 
        >
       
        <div className='menu-modal-content'>
          <div className='modal-menu'>
            <div>
              <p>Are you sure you want to delete this category? All associated menu items will be deleted as well!</p>
            </div>
            <DeleteButton onClick={() => this.props.deleteCategory(this.props.categoryToDelete.id)}> Delete </DeleteButton>
            <CancelButton onClick={this.props.handleClose}> Cancel </CancelButton>
          </div>
        </div>
        </Dialog>
      </div>
    );
  }
}
