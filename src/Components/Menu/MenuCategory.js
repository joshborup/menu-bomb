import React, { Component } from 'react';
import styled from "styled-components";
import MenuItem from './MenuItem';

const Wrapper = styled.div`
  margin: 20px 0px;
  text-align: center;
  overflow:hidden;
  font-family: Montserrat;
`
const InnerBox = styled.div`
  margin: 5px auto;
  
  justify-content: space-between;
`
const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const CatTitle = styled.h2`
  margin-bottom: 15px;
  padding-bottom: 10px;
  font-size: 24px;
  border-bottom: #e9e9e9 solid 1px;
`

export default class MenuCategory extends Component {
  constructor(props){
      super(props)
      this.state = {

      }
      this.getMenuItems = this.getMenuItems.bind(this);
  }

  getMenuItems() {
    let menuItems = [];
    menuItems = this.props.menuItems.map( item => {
      console.log('item: ', item)
      return (
        <MenuItem item={item} handleOpen={this.props.handleOpen}/>
      )
    })
    return menuItems;
  }
  
  render() {
    const menuItems = this.getMenuItems();
    return (
      <Wrapper key={`category-${this.props.category}`} className='menu-category-container'>
        <InnerBox>
          <CatTitle>{this.props.category}</CatTitle>
          <ItemList>
            {menuItems}
          </ItemList>
        </InnerBox>
      </Wrapper>
    );
  }
}