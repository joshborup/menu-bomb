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
        newCategory: '',
        newItemName: '',
        newItemDescription:'',
        newItemPrice:''

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

  handleNewItem = (key, val) => {
      this.setState({
        [key.name]: val
      })
      console.log(key.name, val)
  }

  handleMenuItemChange = (target, item) => {
    // ONCHANGE EVENT METHOD FOR MENU ITEM INPUT FIELDS
    const menuByCategories = this.state.menuByCategories.slice();
    let catIndex = menuByCategories.findIndex( cat => cat.id === item.categoryid);
    let itemIndex = menuByCategories[catIndex].items.findIndex( catItem => catItem.id === item.id);
    let category = menuByCategories[catIndex];
    item[target.name] = target.value;
    category.items.splice(itemIndex, 1, item);
    menuByCategories.splice(catIndex, 1, category);
    this.setState({
      menuByCategories
    })
  }

  toggleMenuItemEdit = (item) => {
    // ONCHANGE EVENT METHOD FOR MENU ITEM INPUT FIELDS
    const menuByCategories = this.state.menuByCategories.slice();
    item.isDisabled = !item.isDisabled;
    let catIndex = menuByCategories.findIndex( cat => cat.id === item.categoryid);
    let itemIndex = menuByCategories[catIndex].items.findIndex( catItem => catItem.id === item.id);
    let category = menuByCategories[catIndex];
    category.items.splice(itemIndex, 1, item);
    menuByCategories.splice(catIndex, 1, category);
    this.setState({
      menuByCategories
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

  submitNewItem = (id) => {
    console.log(id)
    axios.post('/api/add_new_item', {name: this.state.newItemName, price: this.state.newItemPrice, description: this.state.newItemDescription, catId: id}).then(response => {
            console.log(response)
    })
  }
  
  render() {
    
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
            submitNewItem={this.submitNewItem}>
          </MenuMaker>
        </div>
    </div>
    );
  }
}
