import React from 'react';

const RestAcount = (props) => {
    return (
        <div className='account-display'>
            <div>
                <h1>Account</h1>
            </div>
            <div className='account-info'>
                    <div>
                       <div> <span>first name: </span><input onChange={(e) => props.nameChangeHandler('firstName', e.target.value)} disabled={props.disabled} value={props.user.firstName}/></div>
                       
                    </div>
                    <div>
                       <div><span>last name: </span><input onChange={(e) => props.nameChangeHandler('lastName', e.target.value)} disabled={props.disabled} value={props.user.lastName}/></div>
                       
                    </div>
                    <div>
                        <div><span>Email: </span><input onChange={(e) => props.nameChangeHandler('email', e.target.value)} disabled={props.disabled} value={props.user.email} /></div>
                    </div>
                    <div>
                        <div><span>Email: </span><input onChange={(e) => props.nameChangeHandler('email', e.target.value)} disabled={props.disabled} value={props.user.email} /></div>
                    </div>
                    <div>
                        <div><span>Email: </span><input onChange={(e) => props.nameChangeHandler('email', e.target.value)} disabled={props.disabled} value={props.user.email} /></div>
                    </div>
                    <div>
                        <div><span>Email: </span><input onChange={(e) => props.nameChangeHandler('email', e.target.value)} disabled={props.disabled} value={props.user.email} /></div>
                    </div>
                </div>
        </div>
    );
};

export default RestAcount;