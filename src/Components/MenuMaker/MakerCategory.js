import React, { Component } from 'react';
import styled from "styled-components";
import MakerItem from './MakerItem';

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
  background: #E6E6E6;
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

const AddItemButton = styled.button`
  background: rgb(149, 226, 34);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  border: none;
  font-size: 20px;
  font-weight: bolder;
  margin-top: 15px;
  text-shadow: 0.5px 0.5px 1px black;
  box-shadow: 0px 2px 4px rgba(0, 0, 0,0.4);
  cursor: pointer;

`

const Divider = styled.div`
  height: 20px;
  width: 100%;
  border-bottom: solid 1px grey;
`

export default class MenuCategory extends Component {
  constructor(props){
      super(props)
      this.state = {

      }
  }

  // ==============================================================================
  // FUNCTION TO CREATE MENU ITEMS
  // ITEMS FUNCTION TAKE IN THE FOLLOWING:
  // -------------------------------------------------------------------------------
  // const {name, price, description, imageurl, id, fieldEnabled} = this.props.item;

  
  render() {
    
    const itemList = this.props.category.items.map(e => {
      return (
        <MakerItem
          item={e}
        />
      )
    })

    return (
      <Wrapper key={`category-${this.props.category.id}`} className='menu-category-container'>
        <InnerBox>
          <CatName>{this.props.category.catName}</CatName>
            <FlexRow>
              <FlexCol>
                <span>Image</span>
                <ImgInput type='file' />
              </FlexCol>

              <FlexCol>
                <span>name</span>
                <Input />
              </FlexCol>
              <FlexCol>
                <span>price</span>
                <Input />
              </FlexCol>
              <FlexCol>
                <span>description</span>
                <InputDescription />
              </FlexCol>
              
              <AddItemButton>+</AddItemButton>
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