import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from "styled-components";
import currency from 'currency.js';
import EditButton from 'material-ui/svg-icons/image/edit';
import SaveButton from 'material-ui/svg-icons/content/save';

import DeleteButton from 'material-ui/svg-icons/action/delete';

const Wrapper = styled.div`
  width: 49%;
  height: 100px;
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
const Description = styled.textarea`
  color: black;
  background: #f3f3f3;
  border-radius: 2px;
  width: 100%;
  margin-top: 5px;
  height: auto;
  padding: 5px;
  resize: none;
  border: none;
  &:focus {
    outline: none;
    border: 1px solid black;
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
  height: 100%;
  align-items: flex-end;
`
const H3 = styled.input`
  font-size: 16px;
  font-weight: bold;
  background: #f3f3f3;
  border-radius: 2px;
  height: 30px;
  padding: 5px;
  border: none;
  &:focus {
    outline: none;
    border: 1px solid black;
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
    border: 1px solid black;
  }
`

export default class MakerItem extends Component {
  constructor(props){
      super(props)
      const {item, toggleMenuItemEdit} = this.props;
      const {name, price, description, imageurl, id, isDisabled} = item;
      this.state = {
        name,
        price,
        description,
        imageurl,
        id,
        isDisabled 
      }
  }

  handleChange = (prop, val) => {
    console.log('clicked:', prop, val)
    this.setState({
      [prop]: val,
    })
  }

  render() {
  const isDisabled = this.state.isDisabled;
  const fieldsStyle = {
    backgroundColor: isDisabled ? 'white' : '#f3f3f3',
  }
    return (
      <Wrapper key={`item-${this.state.id}`} className='menu-item-container'>
        <InnerBox>
          <FlexRowLeft>
            <H3
              style={fieldsStyle}
              name='name'
              disabled={this.state.isDisabled}
              onChange={(e) => this.handleChange(e.currentTarget.name, e.currentTarget.value)}
              value={this.state.name}>
            </H3>
            <Description
              style={fieldsStyle}
              name='description'
              disabled={this.state.isDisabled}
              onChange={(e) => this.handleChange(e.currentTarget.name, e.currentTarget.value)}
              value={this.state.description}>
            </Description>
          </FlexRowLeft>
          <FlexRowRight>
            <FlexCol>
              <Price
                style={fieldsStyle}
                name='price'
                disabled={this.state.isDisabled}
                onChange={(e) => this.handleChange(e.currentTarget.name, e.currentTarget.value)}
                value={this.state.price}>
              </Price>
              <ButtonsContainer>
                {isDisabled ?
                  <EditButton name='isDisabled' onClick={(e) => this.handleChange('isDisabled', !this.state.isDisabled)}/>
                :  <SaveButton name='isDisabled' onClick={(e) => this.handleChange('isDisabled', !this.state.isDisabled)}/>}
                <DeleteButton />
              </ButtonsContainer>
            </FlexCol>
            <ImageContainer>
              <Image src={this.state.imageurl} alt='scrumptious food' />
            </ImageContainer>
          </FlexRowRight>
        </InnerBox>
      </Wrapper>
    )
  }
}
