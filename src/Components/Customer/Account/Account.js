import React from 'react';
import './account.css';

const Account = (props) => {
    return (
        <div className='account-container'>
            <div>
                <h1>Account Page</h1>
                <div className='account-info'>
                    <div>
                       <span>name: <input disabled={props.disabled} value={`${props.user.first_name} ${props.user.last_name}`}/></span>
                       <button onClick={()=> props.disabledButton()}>edit</button>
                    </div>
                    <div>
                        <span>Email: <input disabled={props.disabled} value={props.user.email} /></span>
                    <button onClick={()=> props.disabledButton()}>edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;