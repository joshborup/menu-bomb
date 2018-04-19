import React from 'react';

const RestAcount = (props) => {
    console.log(props.user.logo)
    return (
        <div className='rest-account-display'>
            <div>
                <h1>Account</h1>
                {props.disabled ? <button className='edit-button' onClick={()=> props.disabledButton()}>edit</button> :  <button className='save-button' onClick={()=> props.save()}>Save</button>}
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
                        <div><span>Phone: </span><input onChange={(e) => props.nameChangeHandler('phone', e.target.value)} disabled={props.disabled} value={props.user.phone} /></div>
                    </div>
                    <div>
                        <div><span>Address 1: </span><input onChange={(e) => props.nameChangeHandler('address1', e.target.value)} disabled={props.disabled} value={props.user.address1} /></div>
                    </div>
                    <div>
                        <div><span>Address 2: </span><input onChange={(e) => props.nameChangeHandler('address2', e.target.value)} disabled={props.disabled} value={props.user.address2} /></div>
                    </div>
                </div>
                <div>
                    <h2>Restauraunt info</h2>
                </div>
                <div className='account-info rest-info'>
                {props.user.logo ? <div>
                    <img src={props.user.logo} />
                </div> : ''}
                    <div>
                       <div> <span>logo: </span><input onChange={(e) => props.handleImageUpload(e.target.files)} disabled={props.disabled} type='file' /></div>
                    </div>

                    <div>
                       <div> <span>Restauraunt Name: </span><input onChange={(e) => props.nameChangeHandler('restaurantName', e.target.value)} disabled={props.disabled} value={props.user.restaurantName}/></div>
                    </div>

                    <div>
                       <div> <span>description: </span><textarea onChange={(e) => props.nameChangeHandler('description', e.target.value)} disabled={props.disabled} value={props.user.description}/></div>
                    </div>
                </div>
        </div>
    );
};

export default RestAcount;

