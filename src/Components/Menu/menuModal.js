import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import './../Login/loginModal.css';
import currency from 'currency.js';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/reducer';

export default class DialogExampleModal extends Component {
constructor(props){
  super(props)
  this.state = {

  };
}

  

  render() {

    const customContentStyle = {
      width: '100%',
      maxWidth: '400px',
      textAlign:'center'
    };

    const titleStyle = {
      padding: '10px'
    }

    return (
      <div className='login-modal-container'>
        <Dialog
          title="Add to Order"
          modal={false}
          open={this.props.modalStatus}
          onRequestClose={this.props.handleClose}
          contentStyle={customContentStyle}
          titleStyle={titleStyle} 
        >
        <div className='menu-modal-content'>
          <div className='modal-menu'>
            <div>
              <h1>{this.props.selectedItem.name}</h1>
              <h2>{currency(this.props.selectedItem.price).format(true)}</h2>
              <h2>{this.props.selectedItem.description}</h2>
            </div>
            <button onClick={this.props.addToCart(selectedItem)}> Add to Order </button>
          </div>
        </div>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => ({ state: state });

export default connect( mapStateToProps, { addToCart})(Detailed);