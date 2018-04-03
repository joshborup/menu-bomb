import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import { connect } from 'react-redux';
import { fetchLoginEmail } from '../../redux/reducer';
import axios from 'axios';
import './loginModal.css';

class DialogExampleModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            loginEmail: '',
            password: ''
          };
    }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleEmail = (email) => {
    this.setState({
        email: email
    })
  }

  handlePassword = (password) => {
    this.setState({
        password: password
    })
  }

  loginButton = () => {
    axios.post('/login', {email: this.state.email, password: this.state.password}).then(response => {
        this.props.fetchLoginEmail(response.data.email);
        console.log(response.data)
        window.location.href = response.data.userType;
    })
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
                    <input onChange={(e)=> this.handleEmail(e.target.value)} value={this.state.email} type='email'/>
                </div>
                <div>
                    <span>Password</span>
                    <input onChange={(e)=> this.handlePassword(e.target.value)} value={this.state.password} type='password' />
                </div>
                <button onClick={()=> this.loginButton()} className='btn'> Login </button>
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

const mapStateToProps = (state) => {
    return {
        user: state.user,
        loginEmail: state.loginEmail
    }
}

const mapDispatchToProps = {
    fetchLoginEmail: fetchLoginEmail
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogExampleModal)