import React, { Component } from 'react';
import RestAccount from './RestAccount';
import Header from '../../Shared/Header';
import './restaccount.css'
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchUserData } from '../../../redux/reducer';

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/menu-bomb/image/upload';

class RestAccountContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address1: '',
            address2: '',
            description: '',
            restaurantName: '',
            logo: ''
        };
      }


    componentDidMount(){
        axios.get('/api/restaurant-profile-info').then(response => {
            console.log(response.data)
            
            this.setState({
                description: response.data.description,
                restaurantName: response.data.restaurantName,
                logo: response.data.logo
                 
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

    handleImageUpload = (file) => {
        
        axios.get('/api/upload-signature').then(response => {
            console.log(response.data.signature)
            console.log(file[0])
            let formData = new FormData();
            formData.append("signature", response.data.signature)
            formData.append("api_key", "325671952438772");
            formData.append("timestamp", response.data.timestamp)
            formData.append("file", file[0]);


        
        
            axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
               this.setState({
                   logo: response.data.secure_url
               })
            }).catch( err => {
                console.log(err);
            })
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
            
            axios.put('/api/update-rest-information', {

                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                logo: this.state.logo,
                restaurantName: this.state.restaurantName,
                description: this.state.description,
                address2: this.state.address2,
                address1: this.state.address1,
                phone: this.state.phone

            }).then(response => {
                console.log(response.data)

                this.setState({

                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
                logo: response.data.logo,
                restaurantName: response.data.restaurantName,
                description: response.data.description,
                address2: response.data.address2,
                address1: response.data.address1,
                phone: response.data.phone

                })
            })
        }
    }

    render() {

        console.log(this.state.logo)

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
                    handleImageUpload={this.handleImageUpload}
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