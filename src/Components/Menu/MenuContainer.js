import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Menu from './Menu';
import menu from './menu.css';

export default class MenuContainer extends Component {
  constructor(){
      super()
      this.state = {
        menuItems: null
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
  
  
  render() {
    return (
      <div class='menu-container-component'>
        {this.state.menuItems && <Menu menuItems={this.state.menuItems} />}
      </div>
    );
  }
}
