import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './Components/Shared/Header';
import Home from './Components/Home/Home';
import OrdersContainer from './Components/Customer/Orders/OrdersContainer'


export default (
    
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/customer/orders' component={OrdersContainer}/>
    </Switch>

)