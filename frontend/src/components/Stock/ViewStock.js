import React from "react";
import Stock from './Stock';
import {Query } from '@apollo/client/react/components'
import {GET_STOCK_LIST_QUERY} from '../../gql/query/stock'
import {  Row } from "antd";
import HeaderI from "../Investor/InvestorHeader";
import HeaderB from "../Businessowner/BusinessHeader";
import HeaderA from "../Admin/AdminHeader";
import SideBarA from "../Admin/Sidebar"
import SideBarB from "../Businessowner/Sidebar"
import SideBarI from "../Investor/Sidebar"
import auth from '../../Auth'

import withAuth from "../../routers/withAuth";

 const ViewStock=(props)=>{
    const userProfile = props.user
    const logout = (e) => {
        auth.logOut();
        this.props.history.push("/login");
      };
    
      const displaySideBar = () => {
        document.getElementById("sidebar-container-s").style.display = "block";
      };
      const closeSideBar = () => {
        document.getElementById("sidebar-container-s").style.display = "none";
      };
    
    return(

        <div className="watchlist-container">
            {userProfile.userType === "Investor" ? (
          <HeaderI
            handleLogout={logout}
            userType={userProfile.userType}
            headerButtons={false}
            displaySideBar={displaySideBar}
          />
          
        ) : (
          <span></span>
        )}
        {userProfile.userType === "Admin" ? (
          <HeaderA
            handleLogout={ logout}
            userType={userProfile.userType}
            headerButtons={false}
            displaySideBar={ displaySideBar}
          />
          
        ) : (
          <span></span>
        )}
        {userProfile.userType === "Businessowner" ? (
          <HeaderB
            handleLogout={ logout}
            userType={userProfile.userType}
            headerButtons={false}
            displaySideBar={ displaySideBar}
          />
        ) : (
          <span></span>
        )}






{userProfile.userType === "Investor" ? (
          <SideBarI closeSideBar={closeSideBar} 
          />
          
        ) : (
          <span></span>
        )}
        {userProfile.userType === "Admin" ? (
          <SideBarA  closeSideBar={closeSideBar} 
          />
          
        ) : (
          <span></span>
        )}
        {userProfile.userType === "Businessowner" ? (
          <SideBarB  closeSideBar={closeSideBar} 
          />
        ) : (
          <span></span>
        )}

            <Query query = {GET_STOCK_LIST_QUERY}>
                {({loading,error,data})=>{
                    if(loading) return <div>Fetching</div>
                    if(error) return <div>Error: {console.log(error)}</div>
                    if(!data.allStock){return <div>No stock to fetch</div>}
                    const allStocks = data.allStock
                    return(
                        <Row>
                            {allStocks.map(stock=><Stock key = {stock.id} stockDetail = {stock}></Stock>)}
                        </Row>
                    )
                }
                }
            </Query> 
            
        </div>
    )
}


export default withAuth(ViewStock);