import React from 'react';
import './account.css';

const Account = (props) => {
    return (
        <div className='account-container'>
            <div>
                <h1>Account Page</h1>
                {props.disabled ? <button className='edit-button' onClick={()=> props.disabledButton()}>edit</button> :  <button className='save-button' onClick={()=> props.save()}>Save</button>}
                <div className='account-info'>
                    <div>
                       <div> <span>first name: </span><input onChange={(e) => props.nameChangeHandler('firstName', e.target.value)} disabled={props.disabled} value={props.firstName}/></div>
                       
                    </div>
                    <div>
                       <div><span>last name: </span><input onChange={(e) => props.nameChangeHandler('lastName', e.target.value)} disabled={props.disabled} value={props.lastName}/></div>
                       
                    </div>
                    <div>
                        <div><span>Email: </span><input onChange={(e) => props.nameChangeHandler('email', e.target.value)} disabled={props.disabled} value={props.email} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;