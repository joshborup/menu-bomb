import React from 'react';
import './account.css';

const Account = (props) => {
    return (
        <div className='account-container'>
            <div>
                <h1>Account Page</h1>
                <div className='account-info'>
                    <div>
                       <span>first name: <input onChange={(e) => props.nameChangeHandler('firstName', e.target.value)} disabled={props.disabled} value={props.firstName}/></span>
                       <button onClick={()=> props.disabledButton()}>edit</button>
                    </div>
                    <div>
                       <span>last name: <input onChange={(e) => props.nameChangeHandler('lastName', e.target.value)} disabled={props.disabled} value={props.lastName}/></span>
                       <button onClick={()=> props.disabledButton()}>edit</button>
                    </div>
                    <div>
                        <span>Email: <input onChange={(e) => props.nameChangeHandler('email', e.target.value)} disabled={props.disabled} value={props.email} /></span>
                    <button onClick={()=> props.disabledButton()}>edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;