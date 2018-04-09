import React, { Component } from 'react';
import styled from "styled-components";
import MakerItem from './MakerItem';
import ImageUpload from './ImageUpload'

const Wrapper = styled.div`
  width: 100%;
  overflow:hidden;
  min-height: 200px;
  text-align: center;
  margin: 20px 0px;
  font-family: Montserrat;
  padding: 10px;
`
const InnerBox = styled.div`
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ItemList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const CatName = styled.h2`
  font-size: 32px;
  margin: 5px;
`
const Input = styled.input`
  width: 140px;
  height: 30px;
  background: #E6E6E6;
  border: none;
  margin: 0 10px;
`

const ImgInput = styled.input`
  border: none;
`

const InputDescription = styled.input`
  width: 280px;
  height: 30px;
  background: #E9E9E9;
  border: none;
  margin: 0 10px;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-item: center;

`

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
`
const ButtonContainer = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const CatHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const AddItemButton = styled.button`
  background: rgb(149, 226, 34);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  border: none;
  font-size: 32px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0.5px 0.5px 1px black;
  box-shadow: 0px 2px 4px rgba(0, 0, 0,0.4);
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
  &:focus {
    outline: none;
  }
`
const DeleteCategory = styled.button`
  background: rgb(250, 14, 14);
  width: 50px;
  height: 25px;
  line-height: 20px;
  border-radius: 5px;
  color: white;
  border: none;
  padding-bottom: 10px;
  margin: 5px;
  font-size: 32px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 0.5px 0.5px 1px black;
  box-shadow: 0px 2px 4px rgba(0, 0, 0,0.4);
  cursor: pointer;
  &:active {
    box-shadow: none;
  }
  &:focus {
    outline: none;
  }
`

const Divider = styled.div`
  
  margin: 20px 10px;
  width: 100%;
  border-bottom: solid 1px grey;
`

const PreviewImage = styled.img`
  max-width:150px;
  margin: 10px auto;
`

export default class MenuCategory extends Component {
  constructor(props){
      super(props)
      this.state = {
        newItemName: '',
        newItemDescription:'',
        newItemPrice:'',
        cloudinaryUrl:'',
        open: false,
      }
  }

  handleNewItem = (key, val) => {
    this.setState({
      [key.name]: val
    })
    console.log(key.name, val)
}

 resetInput = () => {
   this.setState({
    newItemName: '',
    newItemDescription:'',
    newItemPrice:'',
    cloudinaryUrl:''
   })
 }

 newImage = (imageurl) => {
   this.setState({
    cloudinaryUrl: imageurl
   })
 }

  render() {
    console.log(this.props.category.id, this.state)
    const itemList = this.props.category.items.map(e => {
      if(e.id != null){
        return (
          <MakerItem
            item={e}
            key={e.id}
            handleMenuItemChange={this.props.handleMenuItemChange}
            toggleMenuItemEdit={this.props.toggleMenuItemEdit}
            updateMenuItem={this.props.updateMenuItem}
            deleteMenuItem={this.props.deleteMenuItem}
          />
        )
      }
        
    })

    return (
      <Wrapper key={`category-${this.props.category.id}`} className='menu-category-container'>
        <InnerBox>
          <CatHeader>
            <CatName>{this.props.category.catName}</CatName>
            <DeleteCategory onClick={() => {
              this.props.promptUserToDeleteCategory({id: this.props.category.id, name: this.props.category.catName});
            }}>-</DeleteCategory>
          </CatHeader>
          <FlexRow>
            <FlexCol>
              
              <span>Image</span>
              <PreviewImage src={this.state.cloudinaryUrl} />
              <ImageUpload newImage={this.newImage}/>
            </FlexCol>

            <FlexCol>
              <span>name</span>
              <Input value={this.state.newItemName} name='newItemName' onChange={(e) => this.handleNewItem(e.currentTarget, e.target.value)} />
            </FlexCol>
            <FlexCol>
              <span>price</span>
              <Input value={this.state.newItemPrice}   name='newItemPrice' onChange={(e) => this.handleNewItem(e.currentTarget, e.target.value)} />
            </FlexCol>
            <FlexCol>
              <span>description</span>
              <InputDescription value={this.state.newItemDescription}  name='newItemDescription' onChange={(e) => this.handleNewItem(e.currentTarget, e.target.value)} />
            </FlexCol>
            <ButtonContainer>
            <AddItemButton onClick={() => {
              this.props.submitNewItem(this.props.category.id, this.state.newItemName, this.state.newItemDescription, this.state.newItemPrice, this.state.cloudinaryUrl)
              this.resetInput()
            }}>+</AddItemButton>
            </ButtonContainer>
          </FlexRow>
          <Divider></Divider>
          <ItemList>
            {itemList}
          </ItemList>
        </InnerBox>
      </Wrapper>
    );
  }
}