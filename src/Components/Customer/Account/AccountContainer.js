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
            
        }
    }

    componentDidMount(){
        axios.get('/api/user-data').then(response => {
            console.log(response.data[0])
 
            //setting user session in redux for conditionally rendering links bases on usertype
             this.props.fetchUserData(response.data[0])
        })
    }
    render() {
        return (
            <div>
                <Header />
                <Account user={this.props.user}/>
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