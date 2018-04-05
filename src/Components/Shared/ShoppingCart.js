import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCart, fetchUserData } from './redux/reducer'
import axios from 'axios'
import currency from 'currency.js'
import 


class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {}

    }

    componentDidMount() {
    
        this.getCart()
        this.props.fetchUserData()
    }

    getCart(){
        this.props.getCart()
    }

    render() {
        const cart = this.props.cart.cart.map((e)=> {
            return (
                <div></div>
            )
        })
        return (
            <div>
                Cart Modal
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
    getCart: getCart, 
    fetchUserData: fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)