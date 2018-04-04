import React, { Component } from 'react';


export default class CustomerDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className='dashboard-display-container'>
                <div>
                    <div>
                        <h1>Customer Dashboard</h1>
                        <h2>{this.props.email}</h2>
                    </div>
                    
                </div>
        </div>
        );
    }
}