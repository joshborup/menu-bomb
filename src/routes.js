import React from 'react';
import { Route, Switch} from 'react-router-dom';
import LoginModal from './Components/Login/LoginModal'

export default (
    
    <Switch>
        <Route exact path='/' component={LoginModal}/>
        {/* <Route path='/customer' component={Customer}/>
        <Route path='/restaurant' component={Restaurant}/> */}
    </Switch>

)