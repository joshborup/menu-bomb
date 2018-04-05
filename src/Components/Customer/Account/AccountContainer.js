import React, { Component } from 'react';
import Header from '../../Shared/Header';
import Account from './Account';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchUserData } from '../../../redux/reducer';

class AccountContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            disabled: true,
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    componentDidMount(){
        axios.get('/api/user-data').then(response => {
            console.log(response.data[0])
            
            this.setState({
                firstName: response.data[0].first_name,
                lastName: response.data[0].last_name,
                email: response.data[0].email
            })
            //setting user session in redux for conditionally rendering links bases on usertype
             this.props.fetchUserData(response.data[0])
        })
    }

    editButton = () => {
        this.setState({
            disabled: false
        })
    }

    nameChangeHandler = (prop, val) => {
        this.setState({
            [prop]: val
        })
    }

    saveButton = () => {

        if(!this.state.disabled){
            this.setState({
                disabled: true
            })
            axios.put('/api/user-data-customer-update', {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email}).then(response => {
                this.setState({
                    firstName: response.data[0].first_name,
                    lastName: response.data[0].last_name,
                    email: response.data[0].email
                })
            })
        }
    }

    render() {
        return (
            <div className='cust-account-container'>
                
                <Header />
                { this.props.user.user_type === 'customer' ?
                <Account 
                disabledButton={this.editButton} 
                disabled={this.state.disabled}
                save={this.saveButton} 
                user={this.props.user} 
                email={this.state.email} 
                nameChangeHandler={this.nameChangeHandler} 
                firstName={this.state.firstName} 
                lastName={this.state.lastName}/> : <p>you need to register</p>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    fetchUserData: fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer)