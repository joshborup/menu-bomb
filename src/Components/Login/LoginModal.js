import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import './loginModal.css';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class DialogExampleModal extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
          };
    }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

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
        <a href='#' onClick={this.handleOpen}>Login</a>
        <Dialog
          title="Login/Register"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
          titleStyle={titleStyle}
          
        >
        <div className='login-modal-content'>
          <div className='modal-login'>
                <div>
                    <span>Email</span>
                    <input type='email'/>
                </div>
                <div>
                    <span>Password</span>
                    <input type='password' />
                </div>
                <button className='btn'> Login </button>
            </div>
            <div className='modal-register'>
                <h1>Register</h1>
                <div>
                    <button className='btn'>
                        Customer
                    </button>
                    <button className='btn'>
                        Restaurant
                    </button>
                </div>
            </div>
        </div>
        </Dialog>
      </div>
    );
  }
}