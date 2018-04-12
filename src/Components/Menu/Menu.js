import React, { Component } from 'react';
import styled from "styled-components";
import MenuCategory from './MenuCategory';
import Header from '../Shared/Header'

const Wrapper = styled.div`
  width: 100%;
  overflow:hidden;
  min-height: 100vh;
`
const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

`

const RestTitle = styled.h1`
  text-align: center;
  font-family: Montserrat;
  font-weight: bolder;
  font-size: 42px;
`

export default class Menu extends Component {
  constructor(props){
      super(props)
      this.state = {
      }
  }

  getMenuCategories = () => {
    if(this.props.menuItems) {
      // CREATE UNIQUE LIST OF CATEGORIES BASED ON MENU ITEM CATEGORIES
      let uniqueCategories = Array.from(new Set(this.props.menuItems.map( item => item.category)));
      
      const menu = [];
      for(let category of uniqueCategories) {
        let itemsByCategory = this.props.menuItems.filter( item => item.category === category);
        console.log('itemsByCategory: ', itemsByCategory)
        menu.push(
          <MenuCategory menuItems={itemsByCategory} category={category} handleOpen={this.props.handleOpen}/>
        )
      }
      return menu;
    }
    return null;
  }

  
  
  render() {
    const menu = this.getMenuCategories();
    console.log(this.props.restaurantName);
    return (
      <div>
      <Header />
      <Wrapper className='menu-category-container'>
        <InnerBox>
          <RestTitle>{this.props.restaurantName}</RestTitle>
          {menu ? menu : 'Loading...'}
        </InnerBox>
      </Wrapper>
      </div>
    );
  }
}

