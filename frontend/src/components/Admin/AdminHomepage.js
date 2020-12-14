import React, {Component} from 'react'
import withAuth from '../../routers/withAuth'
import Header from './Header'
import BusinessesToBeVerified from '../Businessowner/BusinessesToBeVerified.js'
import AdminsToBeVerified from './AdminsToBeVerified'
import auth from '../../Auth'
import {Redirect} from 'react-router-dom'
import SideBar from "./SidebarAdmin";
import BusinessUpdate from '../Subscriptions/SubscribeCreate'
import AdminToBeVerified from './AdminToBeVerified'
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
        const userProfile = this.props.user
   
        return(
            <div>
                <Header handleLogout = {this.handleLogout} userType={userProfile.userType} headerButtons={false}  displaySideBar = {this.displaySideBar}/>
                <SideBar closeSideBar= {this.closeSideBar}/>
                
                    <BusinessesToBeVerified />
                    <AdminsToBeVerified/>
                    
                    <BusinessUpdate/>
            </div>
        )
    }
}

export default withAuth(AdminHomepage);