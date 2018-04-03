import React, { Component } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Menu from './Menu';

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

export default class MenuCategory extends Component {
  constructor(props){
      super(props)
      this.state = {

      }
      this.getMenuItems = this.getMenuItems.bind(this);
  }
  componentDidMount() {
    axios.get('/api/menu')
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
      <Wrapper className='menu-container-container'>
        <InnerBox>
          <h2>{this.props.menuItems[0].category}</h2>
          <MenuItems />
        </InnerBox>
      </Wrapper>
    );
  }
}
