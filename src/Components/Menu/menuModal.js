import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import './../Login/loginModal.css';
import currency from 'currency.js';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/reducer';
import styled from "styled-components";

class DialogExampleModal extends Component {
constructor(props){
  super(props)
  this.state = {
    text: ''
  };
}


  

  render() {

    const Price = styled.h2`
      color: black;
      font-weight: bolder;
      margin: 5px 0px 10px;
    `;
    const AddButton = styled.button`
      margin: 10px;
      width: 150px;
      height: 30px;
      background:rgb(76, 233, 76);
      border: none;
      color: white;
      font-size: 16px;
      font-weight: bolder;
      border-radius: 2px;
      box-shadow: 1px 2px 3px rgba(0,0,0,0.4);
      text-shadow: .5px .5px 1px black;
      cursor: pointer;
    `;

    const QuantityContainer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 150px;
      margin: 10px auto 0px;
    `

    const AddAmmount = styled.button`
      height: 30px;
      width: 40px;
      border: none;
      border-radius: 4px;
      background: #30cc30;
      color: white;
      font-size: 20px;
      cursor: pointer;
      box-shadow: 1px 2px 3px rgba(0,0,0,0.4);
      &:active {
        box-shadow: none;
      }
      &:focus {
        outline: none;
      }
    `
    const SubtractAmmount = styled.button`
      height: 30px;
      width: 40px;
      border: none;
      border-radius: 4px;
      background: red;
      color: white;
      font-size: 20px;
      cursor: pointer;
      box-shadow: 1px 2px 3px rgba(0,0,0,0.4);
      &:active {
        box-shadow: none;
      }
      &:focus {
        outline: none;
      }
    `
    const QuantityDisplay = styled.input`
      width: 50px;
      height: 30px;
      text-align: center;
      font-size: 20px;
      border: none;
    `

    const noteStyle = {

      width:'100%',
      height:'60px',
      background:'#EDEDED',
      border:'none',
      outline:'none',
      margin:'15px 0px 5px',
      fontSize:'16px',
      

    }
    
    
    
    const customContentStyle = {
      width: '100%',
      maxWidth: '400px',
      textAlign:'center'
    };

    const titleStyle = {
      padding: '10px'
    }

    const imageStyle = {
      maxWidth: '350px',
      margin: '10px auto'
    }
    const buttonStyle = {
      margin: '10px',
      width: '140px',
      height: '30px',
      background:'rgb(76, 233, 76)',
      border: 'none',
      color: 'white',
      fontSize: '16px',
      fontWeight: 'bolder',
      borderRadius: '2px',
      outline: 'none',
      boxShadow: '1px 2px 3px rgba(0,0,0,0.4)'
    }
    console.log(this.state.text);
    return (
      <div className='login-modal-container'>
        <Dialog
          title={this.props.selectedItem.name}
          modal={false}
          open={this.props.modalStatus}
          onRequestClose={this.props.handleClose}
          contentStyle={customContentStyle}
          titleStyle={titleStyle} 
        >
       
        <div className='menu-modal-content'>
          <div className='modal-menu'>
            <div>
              <img style={imageStyle} src={this.props.selectedItem.imageurl}/>
              <Price>{currency(this.props.selectedItem.price).format(true)}</Price>
              <h2>{this.props.selectedItem.description}</h2>
            </div>
            <textarea style={noteStyle} value={this.props.text} onChange={(e) => this.props.changeHandler(e.target.value)}/>
            <QuantityContainer>

              <SubtractAmmount onClick={()=> this.props.changeQuantitySub()}>-</SubtractAmmount>
              <QuantityDisplay readOnly value={this.props.quantity}/>
              <AddAmmount onClick={()=> this.props.changeQuantityAdd()}>+</AddAmmount>
      
            </QuantityContainer>
            <AddButton onClick={() => {
              const selectedItem = {...this.props.selectedItem}
              selectedItem.notes = this.props.text
              this.props.addToCart(selectedItem)
              this.props.handleOpen(this.props.selectedItem)
              this.props.resetQuantity()
              }}> Add to Order </AddButton>
          </div>
        </div>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({ state: state });

export default connect( mapStateToProps, { addToCart})(DialogExampleModal);