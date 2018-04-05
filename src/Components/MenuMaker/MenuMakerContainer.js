import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from "styled-components";
import MenuMaker from './MenuMaker';

export default class MenuMakerContainer extends Component {
  constructor(){
      super()
      this.state = {
        menuCategories: [],
        newCategory: ''
      }
  }

  componentDidMount() {

  }

  handleStatePropChanges = (prop, val) => {
    this.setState({
      [prop]: val,
    })
  }
  
  render() {
    return (
      <div class='menu-maker-container-component'>
        <MenuMaker newCategory={this.state.newCategory} handleStatePropChanges={this.handleStatePropChanges} />
      </div>
    );
  }
}
