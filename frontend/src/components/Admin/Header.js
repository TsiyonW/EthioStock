import React from 'react';
import { Button} from 'antd';
import '../../styles/styles.scss'
import { NavLink } from 'react-router-dom';
import {
    HomeOutlined,
    MenuUnfoldOutlined ,
    TeamOutlined ,
    BookOutlined,
    UserOutlined ,
    LogoutOutlined ,
    DollarOutlined 
  } from '@ant-design/icons';
import SearchBox from '../Search/SearchBox';
class Header extends React.Component{
    state={
        searchField:'',
    }
    

    render(){
        const headerButtons = this.props.headerButtons;
        const userType = this.props.userType;

        return (
            <div className = "header-container">
                <div className = "header-flex-box">

                    <div className  = "header-flex-box-title">
                        
                        <div>
                            <button className="menu-unfold-btn" onClick={this.props.displaySideBar}>
                            <MenuUnfoldOutlined  className="menu-unfold-icon"/>
                            </button>
                            <span className = "header-title">EthioStock</span>
                        </div>
                    </div>

                    <div className = "header-flex-box-search">
                        <SearchBox placeholder="Search Business" handleChange = {e => this.setState({ searchField: e.target.value })}/>
                    </div>

                    <div className = "header-flex-box-menu">
                        <ul>
                            {userType==="Investor"?<li><NavLink to='/investorhomepage' activeClassName="active-link" ><HomeOutlined  className="header-icon"/>Homepage</NavLink></li>:<span></span>
                            }
                            {userType==="Admin"?<li><NavLink to='/adminhomepage' activeClassName="active-link" ><HomeOutlined  className="header-icon"/>Homepage</NavLink></li>:<span></span>
                            }
                            {userType==="Businessowner"?<li><NavLink to='/businesshomepage' activeClassName="active-link" ><HomeOutlined  className="header-icon"/>Homepage</NavLink></li>:<span></span>
                            }
                            {userType==="Admin"?<li><NavLink to="/homepage" activeClassName="active-link"><TeamOutlined className="header-icon"/>Admins</NavLink></li>
                            :<p></p>}
                            
                            <li><NavLink to="/homepage" activeClassName="active-link"><TeamOutlined  className="header-icon"/>Investors</NavLink></li>
                            <li><NavLink to='/profile'  activeClassName="active-link"><UserOutlined  className="header-icon"/>My Profile</NavLink></li>
                            <li><NavLink to='/login' onClick={this.props.handleLogout} ><LogoutOutlined className="header-icon"/>Logout</NavLink></li>
                        </ul>
                    </div>


                </div>
                {
                headerButtons?
                <div className = "header-btns">
                 <NavLink to='/createstock' activeClassName ='active-link'><Button className = "create-btn-green"><DollarOutlined />Create Stock</Button></NavLink>
                    <NavLink to= '/createpost' activeClassName ='active-link'><Button className = "create-btn-white"><BookOutlined />Create New Post</Button></NavLink>
                    
                </div>:<div><br/><br/><br/><br/><br/><br/></div>
                }

<br/>
            </div>
        )
    }
}
export default Header;