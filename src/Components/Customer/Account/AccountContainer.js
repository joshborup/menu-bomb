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
            lastName: ''
        }
    }

    componentDidMount(){
        axios.get('/api/user-data').then(response => {
            console.log(response.data[0])
            
            this.setState({
                firstName: response.data[0].first_name,
                lastName: response.data[0].last_name
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

    render() {
        return (
            <div>
                <Header />
                <Account disabledButton={this.editButton} disabled={this.state.disabled} user={this.props.user}/>
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