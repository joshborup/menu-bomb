import React, { Component } from 'react';
import styled from "styled-components";
import MenuItem from './MenuItem';
import './menuCategory.css';


const Wrapper = styled.div`
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
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

class Menu extends Component {
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
      <Wrapper className='menu-container'>
        <InnerBox>
          <h2>{this.props.menuItems[0].category}</h2>
          {menuItems || 'Loading...'}
        </InnerBox>
      </Wrapper>
    );
  }
}

