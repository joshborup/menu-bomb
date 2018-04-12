import React, { Component } from 'react';
import styled from "styled-components";
import currency from "currency.js";

const Wrapper = styled.div`
  height: 100px;
  width: 48%;
  min-width: 360px;
  background-color: white;
  box-shadow: 1px 2px 5px rgba(0,0,0,0.45);
  overflow:hidden;
  border-radius: 5px;
  margin: 5px 5px;
  text-align: center;
  &:hover{
    cursor:pointer;
    box-shadow: 1px 4px 5px rgba(0,0,0,0.45);
  }
  @media (max-width: 739px) {
    width: 100%;
  }
`

const InnerBox = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  background-color: white;
  height: 100%;
  justify-content: space-between;
`
const FlexRowLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  flex: 7;
  position: relative;
  padding: 10px;
`
const FlexRowRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  flex: 4;
  position: relative;
  max-width: 200px;
  padding: 10px;
  overflow: hidden;
`

const FlexRowMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  flex: 1;
  position: relative;
  padding: 10px;
`
const Description = styled.div`
  color: #8a8a8a;
  margin: 5px 0;
  max-width: 280px;
`
const Image = styled.img`
  height: 100px;
  float: right;
  position: absolute;
  right: 0;
  top: 0;
`
const H3 = styled.div`
  font-size: 15px;
  font-weight: bold;
`
const Price = styled.div`

  
  padding: 5px;
  background-color: #ffffffa3;
  border-radius: 5px;
  margin: 5px;
  font-weight: bold;
  color: green;
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

    const descriptionCutoff = description.length > 50 ? `${description.substring(0, 50)}...` : description
    return (
      <Wrapper key={`item-${id}`} className='menu-item-container' onClick={(e) => this.props.handleOpen(this.props.item)}>
        <InnerBox>
          <FlexRowLeft>
            <H3>{name}</H3>
            <Description>{descriptionCutoff}</Description>
            
          </FlexRowLeft>
          <FlexRowMiddle>
            <Price>{currency(price).format(true)}</Price>
          </FlexRowMiddle>
          <FlexRowRight>
            <Image src={imageurl} alt='scrumptious food' />
          </FlexRowRight>
        </InnerBox>
      </Wrapper>
    );
  }
}