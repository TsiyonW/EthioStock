import React, {Component} from 'react'
import Header from '../Businessowner/Header'
import auth from '../../Auth'
import SideBar from "./Sidebar";
import withAuth from '../../routers/withAuth'
class Profile extends Component{
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
        const userProfile = this.props.user
        
        return(
            <div>
                 <Header handleLogout = {this.logout} userType={userProfile.userType} headerButtons={false}  displaySideBar = {this.displaySideBar}/>
                 <SideBar closeSideBar= {this.closeSideBar}/>
                
                <p>profile page</p>
                <p>First Name: {userProfile.firstName}</p>
                <p>Middle Name: {userProfile.middleName}</p>
                <p>Last Name: {userProfile.lastName}</p>
                <p>E-Mail: {userProfile.email}</p>
                <p>Username: {userProfile.username}</p>
                <p>Phone Number: {userProfile.phoneNo}</p>
                <p>Subcity: {userProfile.subcity}</p>
                <p>User Type: {userProfile.userType}</p>
                <p>woreda: {userProfile.woreda}</p>
                <p>Account Linked: {userProfile.accountLinked}</p>
            </div>
        )
    }
}

export default withAuth(Profile)