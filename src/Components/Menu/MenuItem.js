import React, { Component } from 'react';
import styled from "styled-components";
import currency from "currency.js";

const Wrapper = styled.div`
  height: 100px;
  width: 49%;
  background-color: white;
  box-shadow: 1px 4px 5px rgba(0,0,0,0.45);
  overflow:hidden;
  border-radius: 5px;
  margin 5px 5px;
  &:hover{
    border: 1px solid #0000008c;
  }
`

const InnerBox = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  height: 100%;
  justify-content: space-between;
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 50%;
  position: relative;
  padding: 10px;
`
const Description = styled.div`
  color: #8a8a8a;
  margin: 5px 0;
`
const Image = styled.img`
  height: 100px;
  float: right;
  position: absolute;
  right: 0;
`
const H3 = styled.div`
  font-size: 15px;
  font-weight: bold;
`
const Price = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  padding: 5px;
  background-color: #ffffffa3;
  border-radius: 5px;
  margin: 5px;
`

export default class MenuItem extends Component{
  constructor(props){
    super(props)
    this.state = {

    };
  }


  render() {
    const {name, price, description, imageurl, category, id} = this.props.item;
    console.log('props: ', this.props)
    return (
      <Wrapper key={`item-${id}`} className='menu-item-container' onClick={this.props.handleOpen}>
        <InnerBox>
          <FlexRow>
            <H3>{name}</H3>
            <Description>{description}</Description>
          </FlexRow>
          <FlexRow>
            <Price>{currency(price).format(true)}</Price>
            <Image src={imageurl} alt='scrumptious food' />
          </FlexRow>
        </InnerBox>
      </Wrapper>
    );
  }
}