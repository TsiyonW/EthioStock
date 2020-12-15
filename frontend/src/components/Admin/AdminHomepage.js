import React, {Component} from 'react'
import withAuth from '../../routers/withAuth'
import HeaderA from './AdminHeader'
import BusinessesToBeVerified from '../Businessowner/BusinessesToBeVerified.js'
import AdminsToBeVerified from './AdminsToBeVerified'
import auth from '../../Auth'
import {Redirect} from 'react-router-dom'
import SideBarA from "./Sidebar";
import BusinessUpdate from '../Subscriptions/SubscribeCreate'
// import store from '../../store'
// import AdminToBeVerified from './AdminToBeVerified'
class AdminHomepage extends Component{
    handleLogout=(e)=>{
        auth.logOut()
        return(<Redirect to="/login" />)
    }
    displaySideBar=()=>{
        document.getElementById("sidebar-container-s").style.display = "block";
    }
    closeSideBar=()=>{
        document.getElementById("sidebar-container-s").style.display = "none";
    }
    render(){
        // const { users } = store.getState();
        
        const userProfile = this.props.user
   
        return(
            <div>
                <HeaderA handleLogout = {this.handleLogout} userType={userProfile.userType} headerButtons={false}  displaySideBar = {this.displaySideBar}/>
                <SideBarA closeSideBar= {this.closeSideBar}/>
                
                    <BusinessesToBeVerified />
                    <AdminsToBeVerified/>
                    
                    <BusinessUpdate/>
            </div>
        )
    }
}

export default withAuth(AdminHomepage);