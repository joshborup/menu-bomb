import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Home.css';
import styled from "styled-components";
import Header from '../Shared/Header';
import computerImg from './assets/computer-img.jpeg';
import menuImg from './assets/menu.jpeg';
import takeOutImg from './assets/take-out.jpg';
import cookImg from './assets/cook.jpeg';
import SvgIcon from 'material-ui';
import Search from 'material-ui/svg-icons/action/search';
import SearchItem from './SearchItem';

import Footer from '../Shared/Footer';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            food: ''
        }
    }

    componentDidMount(){
        axios.get(`/api/search-food?search=${this.state.search}`).then(response => {
            this.setState({
                food: response.data
            })
        })
    }

    searchFood = (input) => {
        this.setState({
            search: input
        })
    } 

    submitSearchOnEnter = (e) => {
        console.log(e.key)
        if(e.key == "Enter"){
            console.log('hit');
            axios.get(`/api/search-food?search=${this.state.search}`).then(response => {
                this.setState({
                    food: response.data
                })
            })
        }
    }

    submitSearch = () => {
        axios.get(`/api/search-food?search=${this.state.search}`).then(response => {
            this.setState({
                food: response.data
            })
        })
    }

  render() {
    console.log('food search ------------', this.state.food)
    const searchList = this.state.food ? this.state.food.map(e => {
        return(
            <Link to={`/testMenu/${e.restaurant_id}`}>
                <SearchItem info={e} />
            </Link>
        )
    }) : 'nothing to see here'

    const style = {
        width: '40px',
        height: '40px'
    }
    
    return (
        <div className="home-container">
            <Header />
            <div className="home-hero">
                <h1 className="home-hero-text">Build your brand. Sell more food.</h1>
                <div onKeyPress={(e) => this.submitSearchOnEnter(e)} className='search-bar-container'>
                    <input onChange={(e) => this.searchFood(e.target.value)} value={this.state.search} className='search-bar' placeholder='Search...'/>
                    <Search onClick={() => this.submitSearch()} style={style} color='white' />
                   
                </div>
            </div>
            <div className="home-content-container">
                <div className='search-items-homepage'>
                    {searchList}
                </div>
            <div className="grid-container">
            <h1 className="home-icon-header">Did you know...?</h1>
                <div className="grid-items">
                    <div className="grid-item"><i className="material-icons home-info-icon">attach_money</i><p><b>$799 billion:</b> Restaurant industry sales.</p></div>
                    <div className="grid-item"><i class="material-icons home-info-icon">location_on</i><p><b>1 million+:</b> Restaurant locations in the United States.</p></div>
                    <div className="grid-item"><i className="material-icons home-info-icon">store_mall_directory</i><p><b>7 in 10:</b> Restaurants that are single-unit operations.</p></div>
                </div>
            </div>
            <div className="home-inner-container">
        
            <h1 className="home-icon-header">Our services can help you blow the competition away</h1>
                <div className="home-content">
                    <div className="home-content-text-1"><img src={computerImg} className="home-content-img-1"/>Menu Bomb is a cutting edge web service helping restaurants succeed in a competitive market</div>
                </div>
                <div className="home-content">
                    <div className="home-content-text-2"><img src={menuImg} className="home-content-img-2"/>Restaurants can manage their online presence by leveraging our Menu Builder feature</div>
                </div>
                <div className="home-content">
                    <div className="home-content-text-3"><img src={takeOutImg} className="home-content-img-3"/>Customers can browse a restaurant's online menu and place orders for take out</div>
                </div>
                <div className="home-content">
                    <div className="home-content-text-4"><img src={cookImg} className="home-content-img-4"/>Restaurant staff can view and manage orders placed online through the convenient Restaurant Dashboard</div>
                </div>
            </div>
            <div className="home-inner-container">
                <h1 className="home-icon-header">Our simple process is easy and convenient:</h1>
                <div className="home-content">
                    <div className="home-content-text-1"><img src={computerImg} className="home-content-img-1"/>Placeholder text about how our services work, with a screenshot of a finished thing</div>
                </div>
                <div className="home-content">
                    <div className="home-content-text-2"><img src={menuImg} className="home-content-img-2"/>Placeholder text about how our services work, with a screenshot of a finished thing</div>
                </div>
                <div className="home-content">
                    <div className="home-content-text-3"><img src={takeOutImg} className="home-content-img-3"/>Placeholder text about how our services work, with a screenshot of a finished thing</div>
                </div>
                <div className="home-content">
                    <div className="home-content-text-4"><img src={cookImg} className="home-content-img-4"/>Placeholder text about how our services work, with a screenshot of a finished thing</div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default Home;
