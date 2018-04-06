import React, { Component } from 'react';
import axios from 'axios';
import styled from "styled-components";
import MenuMaker from './MenuMaker';
import Header from '../Shared/Header';
import './menuMaker.css';

export default class MenuMakerContainer extends Component {
  constructor(){
      super()
      this.state = {
        menuByCategories: [],
        newCategory: ''
      }
  }

  componentDidMount() {
    const restaurantId = (window.location.href).split('/').pop();
    console.log('restaurantId: ', restaurantId)
    axios.get(`/api/menu-items/${restaurantId}`).then( menuItems => {
      // CREATE UNIQUE LIST OF CATEGORIES BASED ON MENU ITEM CATEGORIES
      let uniqueCategories = Array.from(new Set(menuItems.data.map( item => item.category)));
      console.log(uniqueCategories)
      const menuByCategories = [];
      for(let category of uniqueCategories) {
        let itemsByCategory = menuItems.data.filter( item => item.category === category);
        menuByCategories.push({
          catName: category,
          items: itemsByCategory,
          id: itemsByCategory[0].categoryid,
        });
      }
      this.setState({
        menuByCategories: menuByCategories
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

  handleMenuItemChange = (target, id) => {
    // ONCHANGE EVENT METHOD FOR MENU ITEM INPUT FIELDS
  }

  addMenuCategory = () => {
    if(this.state.newCategory) {
      const category = {
        category: this.state.newCategory,
        restaurantId: 1
        // restaurantId: this.props.match.params.restaurantId --- UNCOMMENT AFTER TESTING
      }
      axios.post(`/api/category`, category).then( response => {
        const menuByCategories = this.state.menuByCategories.slice();
        const newCategory = {
          catName: this.state.newCategory,
          items: [],
          id: response.data.id,
        };
        menuByCategories.push(newCategory);
        this.setState({
          menuByCategories,
          newCategory: ''
        })
      })
    }
  }


  
  render() {
    console.log('container: ', this.state.menuByCategories)
    return (
      <div>
        <Header />
        <div className='menu-maker-container-component'>
          <MenuMaker
            menuByCategories={this.state.menuByCategories}
            newCategory={this.state.newCategory}
            addMenuCategory={this.addMenuCategory}
            handleStatePropChanges={this.handleStatePropChanges}>
          </MenuMaker>
        </div>
    </div>
    );
  }
}
