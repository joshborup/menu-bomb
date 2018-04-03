import React, { Component } from 'react';
import styled from "styled-components";
import MenuItem from './MenuItem';
import './menuCategory.css';


const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  background-color: #5EBCD1;
  box-shadow: 1px 4px 5px rgba(0,0,0,0.45);
  overflow:hidden;
`
const InnerBox = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #5EBCD1;
  height: 100%;
  justify-content: space-between;
`
const LogoTag = styled.img`
  width: 70px;
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const LinksContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`
const ListItem = styled.li`
  margin: 0px 10px;
  color: white;
  font-size: 20px;
`

export default class MenuCategory extends Component {
  constructor(props){
      super(props)
      this.state = {

      }
      this.getMenuItems = this.getMenuItems.bind(this);
  }

  getMenuItems() {
    if(this.props.menu) {
      return this.props.menuItems.map( item => {
        return (
          <MenuItem item={item} />
        )
      })
    }
  }
  
  render() {
    const menuItems = this.getMenuItems();
    return (
      <Wrapper className='menu-category-container'>
        <InnerBox>
          <h2>{this.props.menuItems[0].category}</h2>
          <MenuItems />
        </InnerBox>
      </Wrapper>
    );
  }
}