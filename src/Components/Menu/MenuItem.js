import React, { Component } from 'react';
import styled from "styled-components";
import currency from "currency.js";

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
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default class MenuItem extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: 'Burger',
      price: 2,
      description: 'fsajklf',
      image_url: 'sfjdaklsaf.png'
    }
  }

  render() {
    return (
      <Wrapper className='menu-item-container'>
        <InnerBox>
          <FlexRow>
            <h3>{this.state.name}</h3><span>{currency(this.state.price).format(true)}</span>
            <div>{this.state.description}</div>
          </FlexRow>
          <FlexRow>
            <img src={this.state.imageUrl} alt='scrumptious food' />
          </FlexRow>
        </InnerBox>
      </Wrapper>
    );
  }
}