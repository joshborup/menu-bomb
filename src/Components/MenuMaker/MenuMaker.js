import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from "styled-components";

export default class MenuMakerContainer extends Component {
  constructor(){
      super()
      this.state = {
        menuItems: null,
        open: false,
        selectedItem: {}
      }
  }
  componentDidMount() {

  }
  

  render() {
    return (
      <div class='menu-maker-component'>
      </div>
    );
  }
}
