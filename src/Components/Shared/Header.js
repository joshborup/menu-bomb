import React, { Component } from 'react';
import LoginModal from '../Login/LoginModal'
import { Link } from 'react-router-dom';
import Logo from './logo2.png'
import styled from "styled-components";
import { connect } from 'react-redux';
import axios from 'axios';
import Cart from './Cart';
import { fetchUserData , fetchCart } from '../../redux/reducer';
import './header.css';


const Wrapper = styled.div`
    height: 70px;
    width: 100%;
    background-color: #C71B04;
    box-shadow: 1px 4px 5px rgba(0,0,0,0.45);
    overflow:hidden;
`
const InnerBox = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #C71B04;
    height: 100%;
    justify-content: space-between;
    @media(max-width: 739px){
        flex-direction: column;
    }
`
const LogoTag = styled.img`
    width: 270px;
    transition: .3sec;
    @media(max-width: 739px){
        width: 180px;
        transition: .3sec;
    }
`

const CartIcon = styled.div`
    width: 80px;
    height: 50px;
    background: red;
    z-index: 3px;
    margin: 0 px;
`

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const LinksContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    @media(max-width: 739px){
        padding-bottom: 10px;
    }
`
const ListItem = styled.li`
    margin: 0px 10px;
    color: white;
    font-size: 20px;
    @media(max-width: 739px){
        font-size: 16px;
    }
`

const MiddleRow = styled.div`
@media(max-width: 739px){
    display: none;
}
`

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
            restaurantId: ''
        }
    }

    componentDidMount(){

        axios.get('/api/restaurant-profile-info').then(response => {
            console.log(response.data)
            
            this.setState({
                restaurantId: response.data.restuarantid,    
            })
      
        })

        axios.get('/api/user-data').then(response => {
            console.log(response.data[0])
 
            //setting user session in redux for conditionally rendering links bases on usertype
             this.props.fetchUserData(response.data[0])
        })
    }

    logout = () => {
        axios.post('/logout').then(response => {
            if(response.data == "logged out"){
                window.location.href = '/'
            }
        })
    }


    render() {
        return (
            <Wrapper className='header-container'>
                <InnerBox>
                    <FlexRow>
                        <Link to='/'><LogoTag src={Logo}/></Link>
                    </FlexRow>

                    <div>

                    </div>

                    <FlexRow>

                        {this.props.user.user_type === 'customer'

                         ?

                        <LinksContainer>
                            <Link to='/'><ListItem>Home</ListItem></Link>
                            <Link to='/customer/orders'><ListItem>Orders</ListItem></Link>
                            <Link to='/customer/account'><ListItem>Account</ListItem></Link>
                            <Link to='/customer' onClick={()=> this.logout()}><ListItem>Log out</ListItem></Link>
                            <Cart/>
                        </LinksContainer> 

                        : this.props.user.user_type === 'restaurant'

                         ?

                         <LinksContainer>
                            <Link to='/'><ListItem>Home</ListItem></Link>
                            <Link to='/restaurant/orders'><ListItem>Orders</ListItem></Link>
                            <Link to={`/restaurant/menumaker/${this.state.restaurantId}`}><ListItem>Menu Maker</ListItem></Link>
                            <Link to='/restaurant/account'><ListItem>Account</ListItem></Link>
                            <Link to='/restaurant' onClick={()=> this.logout()}><ListItem>Log out</ListItem></Link>
                        </LinksContainer> 

                        :

                        <LinksContainer>
                            <Link to='/'><ListItem>Home</ListItem></Link>
                            <ListItem><LoginModal/></ListItem>
                        </LinksContainer>
                        }
                    </FlexRow>
                </InnerBox>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    fetchUserData: fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)