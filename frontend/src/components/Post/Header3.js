import React from 'react';
import {  Button } from 'antd';
import '../../styles/styles.scss'
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png';
import {
    HomeOutlined,
    MenuOutlined,
    TeamOutlined ,
    BookOutlined,
    UserOutlined ,
    LogoutOutlined ,
    DollarOutlined 
  } from '@ant-design/icons';
import SearchBox from '../Account/SearchBox';
class Header extends React.Component{
    state={
        searchField:'',
    }
    

    render(){
        const headerButtons = this.props.headerButtons;
        const userType = this.props.userType;

        return (
            
            <div className = "publichomepage-container">
                
                <div className = "header-flex-box">
                
                    <div className  = "header-flex-box-title">

                        
                        <div>
                    <ul>
                            <li className="menu-unfold-btn" onClick={this.props.displaySideBar}><MenuOutlined size={200}/></li>
                            <li> <img src={logo} alt="Logo" style={{width:40 , height:40}} /></li>
                            <li><span className = "header-title">EthioStock</span></li>
                            <li> <div className = "header-flex-box-search"><SearchBox placeholder="Search ..." handleChange = {e => this.setState({ searchField: e.target.value })}/></div></li>
                           <li>
                                <ul className = "ul-side3">
                                {userType==="Investor"?<li><NavLink to='/investorhomepage' activeClassName="active-link" ><HomeOutlined  className="header-icon"/>Homepage</NavLink></li>:<span></span>
                                }
                                {userType==="Admin"?<li><NavLink to='/adminhomepage' activeClassName="active-link" ><HomeOutlined  className="header-icon"/>Homepage</NavLink></li>:<span></span>
                                }
                                {userType==="Businessowner"?<li><NavLink to='/businesshomepage' activeClassName="active-link" ><HomeOutlined  className="header-icon"/>Homepage</NavLink></li>:<span></span>
                                }
                                {userType==="Admin"?<li><NavLink to="/homepage" activeClassName="active-link"><TeamOutlined className="header-icon"/>Admins</NavLink></li>:<span></span>
                                }
                                
                          
                            <li><NavLink to='/profile'  activeClassName="active-link"><UserOutlined  className="header-icon"/>My Profile</NavLink></li>
                            <li><NavLink to='/login' onClick={this.props.handleLogout} ><LogoutOutlined className="header-icon"/>Logout</NavLink></li>
                        
                            </ul>
                            </li>
                    
                            
                    </ul>
                        </div>
                        
                        
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