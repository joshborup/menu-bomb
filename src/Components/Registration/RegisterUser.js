import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import './registerUser.css';

export default class RegisterUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            address1: '',
            address2: '',
            firstName: '',
            lastName: '',
        };
    };

    handleName = (name) => {
        this.setState({
        name: name
        })
    }
    handleEmail = (email) => {
        this.setState({
        email: email
        })
    }
    handlePhone = (phone) => {
        this.setState({
        phone: phone
        })
    }
    handleAddressOne = (address1) => {
        this.setState({
        address1: address1
        })
    }
    handleAddressTwo = (address2) => {
        this.setState({
        address2: address2
        })
    }
    handleFirstName = (firstName) => {
        this.setState({
        firstName: firstName
        })
    }
    handleLastName = (lastName) => {
        this.setState({
        lastName: lastName
        })
    }

  registerButton = () => {
    axios.put('/register', {name: this.state.name, email: this.state.email, phone: this.state.phone, address1: this.state.address1, address2: this.state.address2, firstName: this.state.firstName, lastName: this.state.lastName}).then(response => {
        console.log(response.data) 
    // I'm not sure how to attach the userType property to our user object
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
      <div className='register-restaurant-container'>
        <form>
          title="Register Your Restaurant"
          contentStyle={customContentStyle}
          titleStyle={titleStyle} 
        >
        <div className='register-restaurant-content'>
          <div className='register-restaurant'>
                <div>
                    <span>Name</span>
                    <input onChange={(e)=> this.handleName(e.target.value)} value={this.state.name} type='name'/>
                </div>
                <div>
                    <span>Email</span>
                    <input onChange={(e)=> this.handleEmail(e.target.value)} value={this.state.email} type='email'/>
                </div>
                <div>
                    <span>Phone</span>
                    <input onChange={(e)=> this.handlePhone(e.target.value)} value={this.state.phone} type='phone' />
                </div>
                <div>
                    <span>Address 1</span>
                    <input onChange={(e)=> this.handleAddressOne(e.target.value)} value={this.state.address1} type='address1'/>
                </div>
                <div>
                    <span>Address 2</span>
                    <input onChange={(e)=> this.handleAddressTwo(e.target.value)} value={this.state.address2} type='address2'/>
                </div>
                <div>
                    <span>First Name</span>
                    <input onChange={(e)=> this.handleFirstName(e.target.value)} value={this.state.firstName} type='firstName'/>
                </div>
                <div>
                    <span>Last Name</span>
                    <input onChange={(e)=> this.handleLastName(e.target.value)} value={this.state.lastName} type='lastName'/>
                </div>
                <button onClick={()=> this.registerButton()} className='btn'> Register </button>
            </div>
            <div className='register-btn'>
                <div>
                    <button className='btn'>
                        Register
                    </button>    
                </div>
            </div>
        </div>
        </form>
      </div>
    );
  }
}