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
        selectedItem: {},
        restaurantName:''
      }
  }
  componentDidMount() {

    const restaurantName = () =>{
      return axios.get(`/api/restaurant-name/${this.props.match.params.id}`);
    }

    const getMenuItems = () =>{
      return axios.get(`/api/menu-items/${this.props.match.params.id}`);
    }

    axios.all([getMenuItems(), restaurantName()]).then(axios.spread((menuItems, name) => {
      console.log(menuItems.data, name.data[0].name)
        this.setState({
          restaurantName: name.data[0].name,
          menuItems: menuItems.data
        })  
    }));
  }
  
  handleOpen = (item) => {
    this.setState({
      open: true,
      selectedItem: item,
    });
  };

  handleClose = () => {
    this.setState({open: false});
  };
  
  render() {
    return (
      <div class='menu-container-component'>
        <Modal modalStatus={this.state.open} handleClose={this.handleClose} selectedItem={this.state.selectedItem}/>
        {this.state.menuItems && <Menu restaurantName={this.state.restaurantName} menuItems={this.state.menuItems} handleClose={this.handleClose} handleOpen={this.handleOpen}/>}
      </div>
    );
  }
}
