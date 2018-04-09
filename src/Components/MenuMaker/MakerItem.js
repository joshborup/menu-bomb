import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from "styled-components";
import currency from 'currency.js';
import EditButton from 'material-ui/svg-icons/image/edit';
import SaveButton from 'material-ui/svg-icons/content/save';
import DeleteButton from 'material-ui/svg-icons/action/delete';

const CLOUDINARY_UPLOAD_PRESET = 'menu_item_upload';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/menu-bomb/image/upload';

const USD = value => currency(value, {symbol: "$", precision: 2});

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
  flex-direction: column;
  position: relative;
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

const NewImageInput = styled.input`
  position: absolute;
  bottom:0;
  left: 0;
  right: 0;
  width: 100%;
  opacity: 0;
  height: 30px;
  margin: 5px;
  z-index: 1;
  cursor: pointer;
`

const NewImageLabel = styled.label`
  position: absolute;
  bottom:0;
  left: 0;
  color: white;
  right: 0;
  height: 30px;
  background:#FB6A6D;
  margin:5px 5px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  font-size: 12px;
  width:90%;
  cursor: pointer;
  box-shadow: 1px 1px 3px black;
`

export default class MakerItem extends Component {
  constructor(props){
      super(props)
      let {item} = this.props;
      let {name, price, description, imageurl, id, isDisabled, restaurantid, categoryid} = item;
      this.state = {
        name,
        price,
        description,
        imageurl,
        id,
        isDisabled,
        restaurantId: restaurantid,
        categoryId: categoryid,
        newImage: ''
      }
  }

  handleChange = (prop, val) => {
    console.log('clicked:', prop, val)
    this.setState({
      [prop]: val,
    })
  }

  handleImageUpload = (file) => {
        
    let formData = new FormData();
    formData.append("file", file[0]);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
        this.setState({
          newImage: response.data.secure_url
        })
    }).catch( err => {
        console.log(err);
    })   
  }

  render() {
    console.log(this.state.newImage)
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
                : <SaveButton name='isDisabled' onClick={(e) => {
                  this.props.updateMenuItem(this.state);
                  this.handleChange('isDisabled', !this.state.isDisabled);
                }}/>}
                <DeleteButton onClick={() => this.props.deleteMenuItem(this.state.id)}/>
              </ButtonsContainer>
            </FlexCol>
            <ImageContainer>
              { this.state.newImage ? <Image src={this.state.newImage}/> : <Image src={this.state.imageurl} alt='scrumptious food' />}
              { !isDisabled ?<div><NewImageInput id='file' name='file' type='file' onChange={(e) => this.handleImageUpload(e.target.files)}/>
              <NewImageLabel for="file">Upload image</NewImageLabel>
              </div> : ''}
            </ImageContainer>
          </FlexRowRight>
        </InnerBox>
      </Wrapper>
    )
  }
}
