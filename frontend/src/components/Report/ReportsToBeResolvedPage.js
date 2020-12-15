import React, {Component} from 'react'
import withAuth from '../../routers/withAuth'
import HeaderA from '../Admin/AdminHeader'
import auth from '../../Auth'
import {Redirect} from 'react-router-dom'
import ReportsToBeResolved from './ReportsToBeResolved'
import SideBarA from "../Admin/Sidebar";
class ReportsToBeResolvedPage extends Component{
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
                <SideBarA closeSideBar= {this.closeSideBar}/>
                
                    <ReportsToBeResolved />
                    
            </div>
        )
    }
}

export default withAuth(ReportsToBeResolvedPage);