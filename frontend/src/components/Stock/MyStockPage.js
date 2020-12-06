import React , {Component} from "react";
import Header from './Header'
import auth from '../Auth'
import RecentTradesList from "./RecentTrade";
import MyStockList from "./MyStockList";
import SideBar from './Sidebar';
class MyStock extends Component{
    state = {
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
    logout= (e)=>{
        auth.logOut()
        this.props.history.push('/login')
    }
    displaySideBar=()=>{
        document.getElementById("sidebar-container-s").style.display = "block";
    }
    closeSideBar=()=>{
        document.getElementById("sidebar-container-s").style.display = "none";
    }
    render(){
        return(
            <div>
                <div className="homepage-header">
                    <Header handleLogout = {this.logout} headerButtons={false} displaySideBar = {this.displaySideBar}/>
                </div>
                <div>
                    <MyStockList myStocks={this.state.mystocks}/>
                    <RecentTradesList/>
                </div>
                <SideBar closeSideBar= {this.closeSideBar}/>
                
            </div>
        )
    }
}

export default MyStock;