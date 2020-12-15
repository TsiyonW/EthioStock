import React, {Component} from 'react'
import withAuth from '../../routers/withAuth'
import HeaderA from '../Admin/AdminHeader'
import auth from '../../Auth'
import {Redirect} from 'react-router-dom'
import SideBar from "../Admin/SidebarAdmin";
import BusinessUpdate from '../Subscriptions/SubscribeCreate'

import BusinessesToBeVerified from './BusinessesToBeVerified.js'
// import AdminToBeVerified from './AdminToBeVerified'
class BusinessesToBeVerifiedPage extends Component{
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
        const userProfile = this.props.user
   
        return(
            <div>
                <HeaderA handleLogout = {this.handleLogout} userType={userProfile.userType} headerButtons={false}  displaySideBar = {this.displaySideBar}/>
                <SideBar closeSideBar= {this.closeSideBar}/>
                
                    <BusinessesToBeVerified />
                    
                    <BusinessUpdate/>
            </div>
        )
    }
}

export default withAuth(BusinessesToBeVerifiedPage);