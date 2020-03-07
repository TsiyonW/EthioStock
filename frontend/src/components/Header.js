import React from 'react';
import {Icon, Input, Button} from 'antd';
import '../styles/styles.scss'
import { NavLink } from 'react-router-dom';
import auth from '../Auth'
class Header extends React.Component{
    state={
        searchField:'',
    }

    logout(){
        auth.logOut()
        // this.props.history.push('/login')
    }
    render(){

        return (
            <div className = "header-container">
                <div className = "header-flex-box">

                    <div className  = "header-flex-box-title">
                        
                        <div>
                            <button className="menu-unfold-btn" >
                                <Icon type="menu-unfold" className="menu-unfold-icon"/>
                            </button>
                            <span className = "header-title">EthioStock</span>
                        </div>
                    </div>

                    <div className = "header-flex-box-search">
                        <div>
                            <Input
                                prefix={<Icon type="search" style={{ fontSize: 15 }} />}
                                type="text"
                                placeholder="Search Business"
                                onChange={e => this.setState({ searchField: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className = "header-flex-box-menu">
                        <ul>
                            <li><NavLink to='/homepage' activeClassName="active-link" ><Icon type = "home" className="header-icon"/>Homepage</NavLink></li>
                            <li><NavLink to="/homepage" activeClassName="active-link"><Icon type = "team" className="header-icon"/>Investors</NavLink></li>
                            <li><NavLink to='/profile'  activeClassName="active-link"><Icon type = "user" className="header-icon"/>My Profile</NavLink></li>
                            <li><button onClick={this.logout}><Icon type = "logout" className="header-icon"/>Logout</button></li>
                        </ul>
                    </div>

                </div>

                <div className = "header-btns">
                 <NavLink to='/createstock' activeClassName ='active-link'><Button className = "create-btn-green"><Icon type = "dollar"/>Create Stock</Button></NavLink>
                    <NavLink to= '/createpost' activeClassName ='active-link'><Button className = "create-btn-white"><Icon type = "book"/>Create New Post</Button></NavLink>
                    
                </div>


            </div>
        )
    }
}
export default Header;