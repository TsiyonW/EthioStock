import React, {Component} from 'react'
import withAuth from '../../routers/withAuth'
import Header from './Header'
import auth from '../../Auth'
import {Redirect} from 'react-router-dom'
class BusinessHomepage extends Component{
    handleLogout=(e)=>{
        auth.logOut()
        return(<Redirect to="/login" />)
        // this.props.history.push('/login')
    }
    displaySideBar=()=>{
        document.getElementById("sidebar-container-s").style.display = "block";
    }
    closeSideBar=()=>{
        document.getElementById("sidebar-container-s").style.display = "none";
    }
    render(){
        const userProfile = this.props.user
        if(userProfile.userType==='Admin'){
            return(
                <Redirect to="/adminhomepage"/>
            )
        }       
        if(userProfile.userType==='Investor'){
            return(
                <Redirect to="/investorhomepage"/>
            )
        }        

        return(
            <div>
                <Header handleLogout = {this.handleLogout} userType={userProfile.userType} headerButtons={false}  displaySideBar = {this.displaySideBar}/>

                <p> Business homepage</p>
            </div>
        )
    }
}

export default withAuth(BusinessHomepage);