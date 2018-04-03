import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './Components/Shared/Header';
import Home from './Components/Home/Home';

export default (
    
    <Switch>
        <Route exact path='/' component={Home}/>
        {/* <Route path='/customer' component={Customer}/>
        <Route path='/restaurant' component={Restaurant}/> */}
    </Switch>

)