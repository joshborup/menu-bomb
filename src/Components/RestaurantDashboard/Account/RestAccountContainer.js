import React, { Component } from 'react';
import RestAccount from './RestAccount';
import Header from '../../Shared/Header';
import './restaccount.css'
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchUserData } from '../../../redux/reducer';

class RestAccountContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address1: '',
            address2: '',
            description: '',
            restaurantName: ''
        };
      }


    componentDidMount(){
        axios.get('/api/restaurant-profile-info').then(response => {
            console.log(response.data)
            
            this.setState({

                description: response.data.description,
                restaurantName: response.data.restaurantName
                
            })
      
        })

        axios.get('/api/user-data').then(response => {
            console.log(response.data[0])
            
            this.setState({

                firstName: response.data[0].first_name,
                lastName: response.data[0].last_name,
                email: response.data[0].email,
                phone: response.data[0].phone,
                address1: response.data[0].address_1,
                address2: response.data[0].address_2,
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

    render() {
        return (
            <div>
                <Header />
                {this.props.user.user_type === 'restaurant' ? 
                <RestAccount 
                    disabledButton={this.editButton} 
                    disabled={this.state.disabled}
                    save={this.saveButton} 
                    user={this.state} 
                    nameChangeHandler={this.nameChangeHandler}
                 /> 
                 : 'Log in to view this page'}
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

export default connect(mapStateToProps, mapDispatchToProps)(RestAccountContainer)