import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from "styled-components";
import MenuMaker from './MenuMaker';

export default class MenuMakerContainer extends Component {
  constructor(){
      super()
      this.state = {

      }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div class='menu-maker-container-component'>
        <MenuMaker />
      </div>
    );
  }
}
