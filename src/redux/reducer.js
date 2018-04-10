import currency from 'currency.js';

let total = currency(1.23).distribute(5);

var initialState = {
    user: '',
    loginEmail:'',
    cart: {
        menu_items: [],
        subTotal: 0,
        salesTax: 0,
        total: 0,
        nextCartId: 0
    },
}

// TAXES
const TAXES = 0.07;
// user data action
const FETCH_USER_DATA = 'FETCH_USER_DATA';
const FETCH_LOGIN_EMAIL = 'FETCH_LOGIN_EMAIL';
const FETCH_CART = 'FETCH_CART';
const ADD_TO_CART = 'ADD_TO_CART';

export default function(state=initialState, action){
    switch(action.type){
        case FETCH_USER_DATA:
    
            return {...state, user: action.payload};

        case FETCH_LOGIN_EMAIL:
    
            return {...state, loginEmail: action.payload};

        case FETCH_CART:

            return {...state, cart: action.payload};

        case ADD_TO_CART:

            return{...state, cart: action.payload};

        default:

            return state;
    }
}

//function to populate user account with user data
export function fetchUserData(user){
    return {
        type: FETCH_USER_DATA,
        payload: user
    }
}

export function fetchLoginEmail(email){
    return {
        type: FETCH_LOGIN_EMAIL,
        payload: email
    }
}

export function fetchCart(cart){
    return {
        type: FETCH_CART,
        payload: cart
    }
}

export function addToCart(selectedItem){
    const newItem = Object.assign({}, selectedItem);
    const cart = initialState.cart;
    newItem.cartId = cart.nextCartId;
    cart.nextCartId++;
    cart.menu_items.push(newItem);
    const newCart = calculateTotals(cart);
    return {
        type: ADD_TO_CART,
        payload: newCart
    }
}
export function removeFromCart(cartId){
    const cart = initialState.cart;
    const itemIndex = cart.menu_items.findIndex( item => item.cartId === cartId);
    cart.menu_items.splice(itemIndex, 1);
    const newCart = calculateTotals(cart);
    return {
        type: ADD_TO_CART,
        payload: newCart
    }
}

function calculateTotals(cart) {
    let total = 0;
    cart.menu_items.forEach(item => {
        total = currency(total).add(item.price).value;
    });
    
    const subTotal = total;
    const salesTax = currency(subTotal).multiply(TAXES).value;
    total = currency(subTotal).add(salesTax).value;

    cart.total = total;
    cart.subTotal = subTotal;
    cart.salesTax = salesTax;
    return cart;
}