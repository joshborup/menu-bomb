import React from 'react';
import './account.css';

const Account = (props) => {
    return (
        <div className='account-container'>
            <div>
                <h1>Account Page</h1>
                <div className='account-info'>
                    <div>
                       name: {props.user.name}
                       <button>edit</button>
                    </div>
                    <div>
                    Email: {props.user.email}
                    <button>edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;