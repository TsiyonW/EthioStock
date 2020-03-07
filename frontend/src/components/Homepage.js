import React , {Component} from "react";
import {NavLink} from 'react-router-dom'
import Header from './Header'
class Homepage extends Component{
    render(){
        return(
            <div>
                <Header />
                <ul>
                    <li><NavLink to="/"/>Create Stock</li>
                    <li><NavLink to="/"/>View Stock</li>
                    <li><NavLink to="/"/>List Stock</li>
                </ul>
            </div>
        )
    }
}

export default Homepage;