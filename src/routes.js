import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Header from './Components/Shared/Header';
import Home from './Components/Home/Home';
import OrdersContainer from './Components/Customer/Orders/OrdersContainer'
import testMenu from './Components/Menu/MenuContainer';
import testMenuMaker from './Components/MenuMaker/MenuMakerContainer';
import AccountContainer from './Components/Customer/Account/AccountContainer'
import RestaurantDashboard from './Components/RestaurantDashboard/RestaurantDashboard';
<<<<<<< HEAD
import RegisterRestaurant from './Components/Registration/RegisterRestaurant'
=======
>>>>>>> rest-dashboard

export default (
    
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/customer/orders' component={OrdersContainer} />
        <Route path='/customer/account' component={AccountContainer} />
        <Route path='/testMenu/:id' component={testMenu} />
        <Route path='/restaurantdashboard' component={RestaurantDashboard} />
        <Route path='/testMenuMaker/:restaurantId' component={testMenuMaker} />
        <Route path='/testregister/:userType' component={RegisterRestaurant} />
    </Switch>

)