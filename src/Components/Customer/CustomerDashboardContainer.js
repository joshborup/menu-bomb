import React, { Component } from 'react';
import CustomerDashboard from './CustomerDashboard';
import { connect } from 'react-redux';
import { fetchUserData } from '../../redux/reducer';
import axios from 'axios';

class CustomerDashboardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    componentDidMount(){
       axios.get('/api/user-data').then(response => {
           console.log(response.data[0])

           //setting user session in redux
            this.props.fetchUserData(response.data[0])
       })
    }
    render() {
        return (
            <div>
               { this.props.user.user_type === 'customer' ? <CustomerDashboard email={this.props.user.email}/> : 'you need to register'}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    fetchUserData: fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDashboardContainer)