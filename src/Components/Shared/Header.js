import React, { Component } from 'react';
import LoginModal from '../Login/LoginModal'
import {Link} from 'react-router-dom';
import Logo from './logo.png'
import styled from "styled-components";
import './header.css';


const Wrapper = styled.div`
    height: 70px;
    width: 100%;
    background-color: #5EBCD1;
    box-shadow: 1px 4px 5px rgba(0,0,0,0.45);
    overflow:hidden;
`
const InnerBox = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #5EBCD1;
    height: 100%;
    justify-content: space-between;
`
const LogoTag = styled.img`
    width: 70px;
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

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {

        }


    }
    render() {
        return (
            <Wrapper className='header-container'>
                <InnerBox>
                    <FlexRow>
                        <LogoTag src={Logo}/>
                        <span className='site-name'>MenuBOMB</span>
                    </FlexRow>

                    <div>

                    </div>

                    <FlexRow>
                        <LinksContainer>
                        <Link to='/'><ListItem>Home</ListItem></Link>
                            <ListItem><LoginModal/></ListItem>
                        </LinksContainer>
                    </FlexRow>
                </InnerBox>
            </Wrapper>
        );
    }
}