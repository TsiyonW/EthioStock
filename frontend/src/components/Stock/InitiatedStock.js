import React, { Component } from 'react';
// import userIcon from '../img/usericon.png';
import {Affix} from 'antd';
import HeaderI from '../Investor/InvestorHeader';
import bg from '../../img/bg.jpg';
// import RecentTradesList from "./RecentTrade";
import SideBar from "../Investor/Sidebar";
import RecentTradesList from '../RecentTrade/RecentTrade';
import {Card,Layout} from "antd";
const {Footer}=Layout
class InitiatedStock extends Component{
    displaySideBar=()=>{
        document.getElementById("sidebar-container-s").style.display = "block";
    }
    closeSideBar=()=>{
        document.getElementById("sidebar-container-s").style.display = "none";
    }
    render(){
        return(
            <>
            
                <div className="homepage-header">
                    <Affix><HeaderI handleLogout = {this.logout} headerButtons={false}  displaySideBar = {this.displaySideBar}/></Affix>
                    <Card bordered={false} cover={<img alt="example" src={bg}  style={{   transparent :1 , marginTop:-10 ,opacity: 0.3 , height:200 , display:"block" ,} }/> }>
                
               
                    <div className="initiatedstock-container">
                <Card style={{width:950 ,height:550 , opacity: 0.7, marginLeft:50 ,background:"whitesmoke",marginTop:-105}}>
                
                 
                 <p className="initiated-title">Initiated Stock</p>
                 
                 <div className="initiated-header">
                <Card style={{width:950 ,height:555 , opacity: 0.9,marginTop:30, marginLeft:-25 ,background:"white"}}>
                
               
                        <ul>
                            <li className="left-head"><span className="trade-company-name">Habasha Beer</span></li>
                            <li className="right-head">Add to watchlist</li>
                        </ul>
               
               
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
                        <button className="apply-btn">Apply</button>
                    
                    </div>

                    
                </div>
                </Card>
                </div>
           
            </Card>
            </div>
            <Affix offsetTop={120} onChange={affixed => console.log(affixed)}><RecentTradesList/></Affix>
            <SideBar closeSideBar= {this.closeSideBar}/>
           
            
            </Card>
           
            
            <Footer style={{ textAlign: 'center'  , marginTop:'200%' ,background:'#CEECE8'}}>Ethiostock ©2020 </Footer>
           
            </div>
            </>
                
        )
    }
}

export default InitiatedStock