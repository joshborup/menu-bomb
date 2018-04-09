import React, { Component } from 'react';
import LoginModal from '../Login/LoginModal'
import {Link} from 'react-router-dom';
import Logo from './logo2.png'
import styled from "styled-components";
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchUserData } from '../../redux/reducer';
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
`
const LogoTag = styled.img`
    width: 270px;
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
`
const ListItem = styled.li`
    margin: 0px 10px;
    color: white;
    font-size: 20px;
    
`

class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.getCart = this.getCart.bind(this)
    }

    componentDidMount(){
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
    
    showCart() {
        this.setState({
            show: true
        })
    }

    hideCart() {
        this.setState({
            show: false
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
                        <LinksContainer>
                        <Link to='/'><ListItem>Home</ListItem></Link>
                            {this.props.user.user_type === 'customer' ? <Link to='/customer/orders'><ListItem>Orders</ListItem></Link> : ''}
                            {this.props.user.user_type === 'customer' ? <Link to='/customer/account'><ListItem>Account</ListItem></Link> : ''}
                            {this.props.user ? <Link to='/customer' onClick={()=> this.logout()}><ListItem>Log out</ListItem></Link> : <ListItem><LoginModal/></ListItem>}
                        </LinksContainer>
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