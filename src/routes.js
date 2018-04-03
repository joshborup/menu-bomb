import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './Components/Shared/Header';
import CustomerDashboardContainer from '../src/Components/Customer/CustomerDashboardContainer'
import Home from './Components/Home/Home';

export default (
    
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/customer' component={CustomerDashboardContainer}/>
    </Switch>

)