import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from "styled-components";
import MenuCategory from './MakerCategory'

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
      <div class='menu-maker-component'>
        <div>
          <div className='add-cat'>
            <h1>Add Category</h1>
            <div>
              <input value={this.props.newCategory} onChange={(e) => this.props.handleStatePropChanges('newCategory', e.target.value)} ></input>
              <button className='add-cat-button'>+</button>
            </div>
          </div>
          <MenuCategory />
        </div>
      </div>
    );
  }
}
