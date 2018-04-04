import React, { Component } from 'react';
import CustomerDashboard from './CustomerDashboard';
import { connect } from 'react-redux';
import { fetchUserData } from '../../redux/reducer';
import Header from '../Shared/Header'
import './customerDashboard.css';
import axios from 'axios';

class CustomerDashboardContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            view: ''
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
        
        console.log(this.state.view)
        
        return (
            <div className='customer-dashboard-container'>
                <Header />
               { this.props.user.user_type === 'customer' ? <CustomerDashboard email={this.props.user.email}/> : <p>you need to register</p>}
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