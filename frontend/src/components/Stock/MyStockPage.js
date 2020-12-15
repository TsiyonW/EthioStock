import React from "react";
import HeaderB from '../Businessowner/BusinessHeader'
import auth from '../../Auth'
import RecentTradesList from "../RecentTrade/RecentTrade";
import MyStockList from "./MyStockList";
import SideBarB from '../Businessowner/Sidebar';
import withAuth from "../../routers/withAuth";

import { MY_STOCK } from "../../gql/query/stock";

 const MyStock =(props)=>{
    const state = {
        sidebarOpen:false,
        mystocks:[{
            id:1,
            change:"+0.24",
            sell:52.26,
            buy:43.43,
            user:{
                firstName:"Tsiyon",
                lastName:"Wuletaw"
            }
    
        },{
            id:2,
            change:"-0.34",
            sell:60.25,
            buy:24.43,
            user:{
                firstName:"Elsabeth",
                lastName:"Wuletaw"
            }
    
        }],
        
    }
    const logout= (e)=>{
        auth.logOut()
        props.history.push('/login')
    }
    const displaySideBar=()=>{
        document.getElementById("sidebar-container-s").style.display = "block";
    }
    const closeSideBar=()=>{
        document.getElementById("sidebar-container-s").style.display = "none";
    }
        return(
            <div>
                <div className="homepage-header">
                    <HeaderB handleLogout = {logout} headerButtons={false} displaySideBar = {displaySideBar}/>
                </div>
                <div>
                <Query query = {MY_STOCK}>
                {({loading,error,data})=>{
                    if(loading) return <div>Fetching</div>
                    if(error) return <div>Error: {console.log(error)}</div>
                    if(!data.myStock){
                        return <div>You dont have a stock created!</div>
                    }
                    const myStocks = data.myStock
                    return(
                        <div>
                            <Row>
                            {myStocks.map(stock=><Stock key = {stock.stock.id} stockDetail = {stock.stock}></Stock>)}
                            </Row>
                        </div>
                    )
                }
                }
            </Query> 
                    <MyStockList myStocks={state.mystocks}/>
                    <RecentTradesList/>
                </div>
                <SideBarB closeSideBar= {closeSideBar}/>
                
            </div>
        )
    }


export default withAuth(MyStock);