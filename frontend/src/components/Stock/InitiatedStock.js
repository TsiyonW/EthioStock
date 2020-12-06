import React, { Component } from 'react';
// import userIcon from '../img/usericon.png';
import {Icon} from 'antd';
// import Header from './Header';
// import RecentTradesList from "./RecentTrade";
// import SideBar from "../Sidebar";
import RecentTradesList from '../RecentTrade/RecentTrade';
class InitiatedStock extends Component{
    displaySideBar=()=>{
        document.getElementById("sidebar-container-s").style.display = "block";
    }
    closeSideBar=()=>{
        document.getElementById("sidebar-container-s").style.display = "none";
    }
    render(){
        return(
            <div>
                {/* <div className="homepage-header">
                    <Header handleLogout = {this.logout} headerButtons={false}  displaySideBar = {this.displaySideBar}/>
                </div> */}
               
                <div className="initiatedstock-container">
                 
                <p className="initiated-title">Initiated Stock</p>
                
                <div className="initiated-header">
                        <ul>
                            <li className="left-head"><Icon className="recenttrades-user-icon" type="user"/><span className="trade-company-name">Habasha Beer</span></li>
                            <li className="right-head">Add to watchlist<Icon className="filedone-icon" type="file-done"/></li>
                        </ul>
                </div>
                <div className="clearfix">

                </div>
                <div className="initiatedstock-content"> 
                    <br/><br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut I abore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehederit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt incididunt
                        culpa qui officia deserunt nollit anim id est laborum
                    </p><br/>
                    <p>Price: <span className="initiated-gray-text">10,000 ETB</span></p>
                    <p>Stock Amount: <span className="initiated-gray-text">20 stock</span></p>
                    <p>Closed: <span className="initiated-gray-text">1D</span></p><br/><br/><br/>
                </div>
                <div className="initiatedstock-flex">
                    <div className="initiated-col1">
                        <div  className="col-sell">

                            <p>Sell</p>
                            <p>52.56</p>
                        </div>
                    </div>
                    <div className="initiated-col2">
                        <div className="col-buy">
                            <p>Buy</p>
                            <p>60.56</p>
                        </div>
                    </div>
                    <div className="initiated-col3">
                        <p>Actual Price</p>
                        <p>Predicted Price</p>
                        <button className="apply-btn"><Icon type="double-right" className="bold-icon"/>Apply</button>
                    </div>
                </div>
                
            </div>
            <RecentTradesList/>
            {/* <SideBar closeSideBar= {this.closeSideBar}/> */}
                
            </div>
                
        )
    }
}

export default InitiatedStock