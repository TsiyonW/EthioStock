import React from 'react';
import { Button,Affix,Search} from 'antd';
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
import SearchBox from './SearchBox';
class Header1 extends React.Component{
    state={
        searchField:'',
    }
    

    render(){
        const headerButtons = this.props.headerButtons;
        const userType = this.props.userType;

        return (
            <div>
             

            <div className = "publichomepage-container">


          <Affix offsetTop={0} onChange={affixed => console.log(affixed)  }  >
     
            <ul>
                <li> <button className="menu-unfold-btn" onClick={this.props.displaySideBar}></button></li>
                <li><span className = "header-title">EthioStock</span> </li>
                <li> <div className = "header-flex-box-search">    <SearchBox placeholder="Search ..." onSearch={value => console.log(value)} enterButton  /></div></li>
                <li> 
                    <ul className="ul-side">    
                            <li><NavLink to='/investorhomepage' activeClassName="active-link" >Investor</NavLink></li>
                            <li><NavLink to="/adminhomepage" activeClassName="active-link">adminhomepage</NavLink></li>
                            <li><NavLink to='/profile'  activeClassName="active-link">My Profile</NavLink></li>

                            <li><NavLink to='/login'  >LogIn</NavLink></li>
                            
                    </ul> 
                    
                </li>
         

                
            </ul>
            </Affix>
                {
                headerButtons?
                <div className = "header-btns">
                 <NavLink to='/createstock' activeClassName ='active-link'><Button className = "create-btn-green"><DollarOutlined />Create Stock</Button></NavLink>
                    <NavLink to= '/createpost' activeClassName ='active-link'><Button className = "create-btn-white"><BookOutlined />Create New Post</Button></NavLink>
                    
                </div>:<div><br/><br/><br/><br/><br/><br/></div>
                }

<br/>
            </div>
            </div>
        )
    }
}
export default Header1;