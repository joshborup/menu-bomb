import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from "styled-components";
import currency from 'currency.js';
import EditButton from 'material-ui/svg-icons/image/edit';
import DeleteButton from 'material-ui/svg-icons/action/delete';
import { MEDIUM } from 'material-ui/utils/withWidth';

const Wrapper = styled.div`
  height: 100px;
  width: 49%;
  background-color: white;
  box-shadow: 1px 4px 5px rgba(0,0,0,0.45);
  overflow:hidden;
  border-radius: 5px;
  margin 5px 5px;
  &:hover{
    box-shadow: 0.5px 2px 2.5px rgba(0,0,0,0.45);
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
const FlexRowLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 50%;
  position: relative;
  padding: 10px;
`
const FlexRowRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  width: 50%;
  position: relative;
`
const Description = styled.input`
  color: black;
  background: #f3f3f3;
  border-radius: 2px;
  height: 30px;
  margin-top: 5px;
  border: none;
  &:focus {
    outline: none;
  }
`
const ImageContainer = styled.div`
  width: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Image = styled.img`
  height: 100%;
  float: right;
`
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const ButtonsContainer = styled.div`
  display: flex;
`
const H3 = styled.input`
  font-size: 16px;
  font-weight: bold;
  background: #f3f3f3;
  border-radius: 2px;
  height: 30px;
  border: none;
  &:focus {
    outline: none;
  }
`
const Price = styled.input`
  width: 90%;
  padding: 5px;
  background: #f3f3f3;
  border-radius: 2px;
  height: 30px;
  border: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`

export default class MakerItem extends Component {
  constructor(){
      super()
      this.state = {

      }
  }
  
  render() {
    const {item, toggleMenuItemEdit, handleMenuItemChange} = this.props;
    const {name, price, description, imageurl, id, isDisabled} = item;
    return (
      <Wrapper key={`item-${id}`} className='menu-item-container'>
        <InnerBox>
          <FlexRowLeft>
            <H3
              name='name'
              disabled={isDisabled}
              onChange={(e) => handleMenuItemChange(e.currentTarget, item)}
              value={name}>
            </H3>
            <Description
              name='description'
              disabled={isDisabled}
              onChange={(e) => handleMenuItemChange(e.currentTarget, item)}
              value={description}>
            </Description>
          </FlexRowLeft>
          <FlexRowRight>
            <FlexCol>
              <Price
                name='price'
                disabled={isDisabled}
                onChange={(e) => handleMenuItemChange(e.currentTarget, item)}
                value={price}>
              </Price>
              <ButtonsContainer>
                <EditButton onClick={() => toggleMenuItemEdit(item)}/>
                <DeleteButton />
              </ButtonsContainer>
            </FlexCol>
            <ImageContainer>
              <Image src={imageurl} alt='scrumptious food' />
            </ImageContainer>
          </FlexRowRight>
        </InnerBox>
      </Wrapper>
    )
  }
}
