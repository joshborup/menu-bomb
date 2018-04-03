import React from 'react';

const CustomerDashboard = (props) => {
    return (
        <div>
            <h1>Customer Dashboard</h1>
            <h2>{props.email}</h2>
        </div>
    );
};

export default CustomerDashboard;