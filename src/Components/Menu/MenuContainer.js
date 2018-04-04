import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Menu from './Menu';
import menu from './menu.css';
import Modal from './menuModal';

export default class MenuContainer extends Component {
  constructor(){
      super()
      this.state = {
        menuItems: null,
        open: false,
        loginEmail: '',
        password: '',
      }
  }
  componentDidMount() {
    const restaurantId = (window.location.href).split('/').pop();
    console.log('restaurantId: ', restaurantId)
    axios.get(`/api/menu-items/${restaurantId}`).then( menuItems => {
      this.setState({
        menuItems: menuItems.data
      })
    }).catch( err => {
      console.log('get menu-items err: ', err);
    })
  }
  
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  
  render() {
    return (
      <div class='menu-container-component'>
        <Modal modalStatus={this.state.open} handleClose={this.handleClose}/>
        {this.state.menuItems && <Menu menuItems={this.state.menuItems} handleClose={this.handleClose} handleOpen={this.handleOpen}/>}
      </div>
    );
  }
}
