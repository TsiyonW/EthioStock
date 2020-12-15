import React from "react";
import Stock from '../Stock/ApplyForStock';
import {Query } from '@apollo/client/react/components'
// import {GET_STOCK_LIST_QUERY} from '../../gql/query/stock'
import HeaderI from "../Investor/InvestorHeader";
import HeaderB from "../Businessowner/BusinessHeader";
import HeaderA from "../Admin/AdminHeader";
// import SideBarA from "../Admin/Sidebar"
import SideBarB from "../Businessowner/Sidebar"
import SideBarI from "../Investor/Sidebar"
import {  Row } from "antd";
import { GET_MY_WATCHLIST } from "../../gql/query/watchlist";
import auth from '../../Auth'
import withAuth from "../../routers/withAuth";

 const Watchlist=(props)=>{
     
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
          <SideBarI  closeSideBar={closeSideBar} 
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
            <Query query = {GET_MY_WATCHLIST}>
                {({loading,error,data})=>{
                    if(loading) return <div>Fetching</div>
                    if(error) return <div>Error: {console.log(error)}</div>
                    if(!data.myWatchlist){
                        return <div>Nothing in your Watchlist</div>
                    }
                    const watchLists = data.myWatchlist
                    return(
                        <div>
                            <Row>
                            {watchLists.map(watchlist=><Stock key = {watchlist.stock.id} stockDetail = {watchlist.stock}></Stock>)}
                            </Row>
                        </div>
                    )
                }
                }
            </Query> 
        </div>
    )
}


export default withAuth(Watchlist);