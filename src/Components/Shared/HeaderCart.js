class HeaderCart extends Component {

    componentDidMount(){
        this.getCart()
    }

    getCart(){
        this.props.getCart()
    }


    render() {
        const cart = this.props.cart.cart.map((e) => {
            return (
                <div className="header-cart_flex" key={e.id}>
                        <div><img src={e.image_url} alt="picture" width="70px"/></div>
                    <div className="header_cart_wrapper">
                        <div style={name}><Link to={`/menuItem/${e.id}`}>{e.name}</Link></div>
                        <div>Qty: {e.qty}</div>
                    </div>
                        <div className="header_cart_producttotal">${(e.price * e.qty).toFixed(2)}</div>
            </div>)
        })
        return (
            <div >
                <div className="header_cart_summary">Cart Summary</div>
                    {cart}
                    <div className="header_cart_ordertotals">
                        <div>
                            <span>Subtotal ({this.props.cart.qty} Items):</span>
                            <div> ${this.props.cart.subtotal.toFixed(2)}</div>
                        </div>
                        <div>
                            <span>Tax:</span>
                            <div>${(this.props.cart.subtotal * .06).toFixed(2)}</div>
                        </div>
                        <div className="header_cart_ordersubtotals"> 
                            <span>Order Total:</span>
                            <div>${((this.props.cart.subtotal * 1.06) + 5).toFixed(2)} </div>
                        </div>
                    </div>
                </div>
        )
    }
}

const name = {
    fontSize: '10pt',
    fontWeight: 'bold',
    textTransform: 'capitalize'
}

function mapStateToProps(state){
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    getCart: getCart
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCart)