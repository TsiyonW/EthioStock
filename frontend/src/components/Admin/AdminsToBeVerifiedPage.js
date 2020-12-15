import React, {Component} from 'react'
import withAuth from '../../routers/withAuth'
import HeaderA from './AdminHeader'
import AdminsToBeVerified from './AdminsToBeVerified'
import auth from '../../Auth'
import {Redirect} from 'react-router-dom'
import SideBar from "./SidebarAdmin";
import BusinessUpdate from '../Subscriptions/SubscribeCreate'
// import AdminToBeVerified from './AdminToBeVerified'
class BusinessesToBeVerified extends Component{
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
                
                    <AdminsToBeVerified/>
                    
                    <BusinessUpdate/>
            </div>
        )
    }
}

export default withAuth(BusinessesToBeVerified);