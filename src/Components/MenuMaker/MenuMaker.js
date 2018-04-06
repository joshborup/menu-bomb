import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from "styled-components";

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
      <div className='menu-maker-component'>
        <input value={this.props.newCategory} onChange={(e) => this.props.handleStatePropChanges('newCategory', e.target.value)} ></input>
        <button></button>
      </div>
    );
  }
}
