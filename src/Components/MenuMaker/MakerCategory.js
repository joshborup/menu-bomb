import React, { Component } from 'react';
import styled from "styled-components";
import MakerItem from './MakerItem';

const Wrapper = styled.div`
  background-color: #5EBCD1;
  box-shadow: 1px 4px 5px rgba(0,0,0,0.45);
  overflow:hidden;
`
const InnerBox = styled.div`
  margin: 5px auto;
  background-color: #5EBCD1;
  justify-content: space-between;
`
const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export default class MenuCategory extends Component {
  constructor(props){
      super(props)
      this.state = {

      }
  }

  // ==============================================================================
  // FUNCTION TO CREATE MENU ITEMS
  // ITEMS FUNCTION TAKE IN THE FOLLOWING:
  // -------------------------------------------------------------------------------
  // const {name, price, description, imageurl, id, fieldEnabled} = this.props.item;
  // ==============================================================================

  // ===============================================
  // ===============================================
  //  COMPONENT TO GET PROPS FROM MenuMaker.js
  // ===============================================
  // ===============================================

  // FUNCTION STOLEN FROM MenuCategory.js - NEEDS CHANGING!!!!!!!
  getMenuItems = () => {
    let menuItems = [];
    menuItems = this.props.menuItems.map( item => {
      console.log('item: ', item)
      return (
        <MenuItem item={item} handleOpen={this.props.handleOpen}/>
      )
    })
    return menuItems;
  }
  handleMenuItemChange = (target, id) => {
    // ONCHANGE EVENT METHOD FOR MENU ITEM INPUT FIELDS
  }
  
  render() {
    const menuItems = this.getMenuItems();
    return (
      <Wrapper key={`category-${this.props.category}`} className='menu-category-container'>
        <InnerBox>
          <h2>{this.props.category}</h2>
          <ItemList>
            {menuItems}
          </ItemList>
        </InnerBox>
      </Wrapper>
    );
  }
}