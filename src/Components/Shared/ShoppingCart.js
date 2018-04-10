import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCart, fetchUserData } from './redux/reducer'
import axios from 'axios'
import currency from 'currency.js'
import SvgIcon from 'material-ui';


class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {}

    }

    componentDidMount() {
    
        this.fetchCart()
        this.props.fetchUserData()
    }

    fetchCart(){
        this.props.fetchCart()
    }

    render() {
        const cart = this.props.cart.menu_items.map((e)=> {
            return (
                
                <div key={e.id} className="cart-line-item-wrapper" >
                    <div className="cart-line-item">
                        <div className="cart-left" >
                            <div><Link to={`/menuItem/${e.id}`}><img src={e.image_url} alt={e.name}/></Link></div>
                            <div className="cart-menuItem-name"><Link to={`/menuItems/${e.id}`}>{e.name}</Link></div>
                            <button onClick={() => this.removeFromCart(e.id)}>Remove</button>
                        </div>
                        <div className="cart-right" >
                            <div className="cart-qty">
                                <button onClick={() => this.decreaseQty(e.qty, e.id)} >-</button>
                                {e.qty}
                                <button onClick={() => this.increaseQty(e.id)}>+</button>
                            </div>
                            <div>${(e.price * e.qty).toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="cart-body">
                    <div className="cart-column-names">
                        <div className="cart-left"></div>
                        <div className="cart-right">
                            <div>Orders</div>
                            <div>Total</div>
                        </div>
                    </div>
                    {this.props.cart.length === 0 && 
                        <div className="cart-no-items">There are no items in your cart.</div>
                    }
                    {this.props.cart && cart}
                    <div className="cart-totals">
                        Order Subtotal: ${this.props.cart.subtotal.toFixed(2)}
                        <Link to="/customer/account"><div><button className="button" >Check Out</button></div></Link>
                    </div>
                </div>
                
            </div>
            )
        }
    }




function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    fetchCart: fetchCart, 
    fetchUserData: fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

// increaseQty(menu_item_id){
//     const body = {
//         menu_item_id: menu_item_id
//     }

//     axios.post('/api/cart', body).then(response => {
//         console.log('item added to cart')
//         this.fetchCart()
//     })
// }

// decreaseQty(qty, menu_item_id){
//     const body = {
//         menu_item_id: menu_item_id
//     }

//     if(qty === 1) {
//         this.removeFromCart(menu_item_id)
//     } else {
//         axios.patch('/api/cart', body).then((response) => {
//             console.log('item removed from cart')
//             this.fetchCart()
//         })
//     }
// }

// removeFromCart(menu_item_id){
//     axios.delete(`/api/cart/${menu_item_id}`).then(response => {
//         console.log('item removed from cart')
//         this.fetchCart()
//     })
// }