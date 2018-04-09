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
    axios.get(`/api/menu-categories/${restaurantId}`).then( menuItems => {
      // CREATE UNIQUE LIST OF CATEGORIES BASED ON MENU ITEM CATEGORIES
      let uniqueCategories = Array.from(new Set(menuItems.data.map( item => item.category)));
      console.log(uniqueCategories)
      const menuByCategories = [];
      for(let category of uniqueCategories) {
        let itemsByCategory = menuItems.data.filter( item => item.category === category);
        itemsByCategory.forEach(e => e.isDisabled = true);

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
  handleNewCategoryChange = (val) => {
    this.setState({
      newCategory: val,
    })
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

  submitNewItem = (id, newItemName, newItemDescription, newItemPrice) => {
    console.log(id)
    this.setState({

    })
    axios.post('/api/add_new_item', {restaurantId: this.props.match.params.restaurantId, name: newItemName, price: newItemPrice, description: newItemDescription, catId: id, imageUrl: 'https://gloimg.gamcdn.com/G/pdm-product-pic/Clothing/2017/12/18/source-img/20171218172310_94935.jpg'}).then(response => {
        
      axios.get(`/api/menu-categories/${this.props.match.params.restaurantId}`).then( menuItems => {
        // CREATE UNIQUE LIST OF CATEGORIES BASED ON MENU ITEM CATEGORIES
        let uniqueCategories = Array.from(new Set(menuItems.data.map( item => item.category)));
        console.log(uniqueCategories)
        const menuByCategories = [];
        for(let category of uniqueCategories) {
          let itemsByCategory = menuItems.data.filter( item => item.category === category);
          itemsByCategory.forEach(e => e.isDisabled = true);
  
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
    })
  }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <div className='menu-maker-container-component'>
          <MenuMaker
            handleNewItem={this.handleNewItem}
            menuByCategories={this.state.menuByCategories}
            newCategory={this.state.newCategory}
            addMenuCategory={this.addMenuCategory}
            handleNewCategoryChange={this.handleNewCategoryChange}
            handleMenuItemChange={this.handleMenuItemChange}
            toggleMenuItemEdit={this.toggleMenuItemEdit}
            submitNewItem={this.submitNewItem}
            >
          </MenuMaker>
        </div>
    </div>
    );
  }
}
