import React, { Component } from 'react';
import styled from "styled-components";
import MenuCategory from './MenuCategory';

const Wrapper = styled.div`
  width: 100%;
  background-color: #5EBCD1;
  box-shadow: 1px 4px 5px rgba(0,0,0,0.45);
  overflow:hidden;
`
const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #5EBCD1;
  height: 100%;
  justify-content: space-between;
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
    return (
      <Wrapper className='menu-category-container'>
        <InnerBox>
          {menu ? menu : 'Loading...'}
        </InnerBox>
      </Wrapper>
    );
  }
}

