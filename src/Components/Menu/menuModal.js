import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import './../Login/loginModal.css';

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
                    <span>Email</span>
                    <input />
                </div>
                <div>
                    <span>Password</span>
                    <input />
                </div>
                <button> Login </button>
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
