const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const user = require('./controller/user');
const orders = require('./controller/orders');
const restaurant = require('./controller/restaurant');
const customer = require('./controller/customer');
const menu = require('./controller/menu');
const cart = require('./controller/cart');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());


//database connection
massive(process.env.CONNECTION_STRING).then(db => {
    console.log('database connected')
    app.set('db', db)
})


//session connection
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        // 2 weeks
        maxAge: 60 * 60 * 24 * 14 * 1000
    } 
}))


// ENDPOINTS
app.post('/register', user.register);
app.post('/login',  user.login);
app.post('/logout', user.logout);

app.post('/api/profile-data', restaurant.addProfileData);
app.get('/api/user-data', user.data);
app.get('/api/menu-items/:id', menu.getMenuItems);
app.get('/api/get-order-by-id', orders.customer );

app.get('/api/restaurant-name/:id', menu.restaurantName);

app.get('/api/menu-categories/:id', menu.getMenuCategories);
app.post('/api/category', menu.addCategory);
app.delete('/api/category/:id', menu.deleteCategory);

app.put('/api/user-data-customer-update', customer.update);

app.post('/api/add_new_item', menu.addItem);
app.put('/api/menu-item', menu.updateItem);
app.delete('/api/menu-item/:id', menu.deleteItem);

app.get('/api/cart-items', cart.getItems);
app.get('/api/restaurant-info', restaurant.getRestaurantInfo);
app.get('/api/restaurant-user-info', restaurant.getRestaurantUserInfo);
app.post('/api/cart-item', cart.addItem);
app.delete('/api/cart-item/:cartItemId', cart.deleteItem);
app.get('/api/upload-signature', menu.signUpload);

app.get('/api/search-food', menu.getSearchItems)

const PORT = 4000;
app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`));
