import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './Components/Shared/Header';

export default (
    
    <Switch>
        <Route exact path='/' component={Header}/>
        {/* <Route path='/customer' component={Customer}/>
        <Route path='/restaurant' component={Restaurant}/> */}
    </Switch>

)