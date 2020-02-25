import React from 'react';
import {Icon} from 'antd';
import '../styles/styles.scss'
class Header extends React.Component{

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
                            <span><Icon type = "search" className ="search-icon"/></span>
                            <input type = "text" placeholder="Search business"/>
                        </div>
                    </div>

                    <div className = "header-flex-box-menu">
                        <ul>
                            <li><a href="#"><Icon type = "team" className="header-icon"/>Investors</a></li>
                            <li><a href="#"><Icon type = "user" className="header-icon"/>My Profile</a></li>
                            <li><a href="#"><Icon type = "logout" className="header-icon"/>Logout</a></li>
                        </ul>
                    </div>

                </div>

                <div className = "header-btns">
                    <button className = "create-btn-green"><Icon type = "dollar" className="header-icon-btn"/>Create Stock</button>
                    <button className = "create-btn-white"><Icon type = "book" className="header-icon-btn"/>Create New Post</button>
                    
                </div>


            </div>
        )
    }
}
export default Header;