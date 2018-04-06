import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from "styled-components";
import MenuMaker from './MenuMaker';

export default class MenuMakerContainer extends Component {
  constructor(){
      super()
      this.state = {
        menuItems: null,
        menuCategories: [],
        newCategory: ''
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
  handleStatePropChanges = (prop, val) => {
    this.setState({
      [prop]: val,
    })
  }

  addMenuCategory(category) {

  }


  
  render() {
    return (
      <div class='menu-maker-container-component'>
        <MenuMaker newCategory={this.state.newCategory} menuItems={this.state.menuItems} modifyMenuItems{} handleStatePropChanges={this.handleStatePropChanges} addMenuCategory={this.addMenuCategory}/>
      </div>
    );
  }
}
