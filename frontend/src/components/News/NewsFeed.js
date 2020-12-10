import React , {Component} from "react";
import Header from './Header'
import auth from '../../Auth'
import RecentTradesList from "./RecentTrade";
import SideBar from '../Businessowner/Sidebar';
class NewsFeed extends Component{
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
                    <Header handleLogout = {this.logout} headerButtons={true}  displaySideBar = {this.displaySideBar}/>
 
                </div>
                
                <RecentTradesList/>
                <SideBar closeSideBar= {this.closeSideBar}/>
                
            </div>
        )
    }
}

export default NewsFeed;