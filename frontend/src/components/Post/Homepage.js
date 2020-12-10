import React  from "react";
import NotificationList from '../Notification/NotificationList'
import Header from './Header'
import PostList from '../PostList'
import auth from '../../Auth'
// import store from '../store'
import {GET_ALL_POSTS} from '../../gql/query/post'
import SideBar from "../Businessowner/Sidebar";
import {Redirect} from 'react-router-dom'
import { useQuery } from '@apollo/client'

import withAuth from '../../routers/withAuth';
function handleLogout(e){
    auth.logOut()
    return(<Redirect to="/login" />)
    // this.props.history.push('/login')
}
function displaySideBar(){
    document.getElementById("sidebar-container-s").style.display = "block";
}
function closeSideBar(){
    document.getElementById("sidebar-container-s").style.display = "none";
}
function Homepage (props){
    const {loading:loading_posts,err:post_err, data:data_posts} = useQuery(GET_ALL_POSTS)
    const userProfile = props.user
    if(loading_posts){
        return <div>(loading)</div>
        
    }
    if(post_err){
        return <div>{post_err}</div>
    }

    if(userProfile.userType === "Investor"){
        return(<Redirect to='/createstock'/>)
    }
    if(userProfile.userType === "Admin"){
        return(<Redirect to='/adminhome'/>)
    }
    if(userProfile.userType === "Business owner"){
        return(<p>I AM HERE</p>)
    }  

    
    return(
            <div>
     
                <div className="homepage-header">
                    <Header handleLogout = {handleLogout} userType={userProfile.userType} headerButtons={true}  displaySideBar = {displaySideBar}/>
                </div>
                {/* <img src="https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"alt="new"/> */}
                

                <PostList posts = {data_posts.allPosts} /> 
                
                <NotificationList/> 
                <SideBar closeSideBar= {closeSideBar}/>
                
                {/* <ul>
                    <li><NavLink to="/createstock">Create Stock</NavLink></li>
                    <li><NavLink to="/viewstock">View Stock</NavLink></li>
                    <li><NavLink to="/liststock">List Stock</NavLink></li>
                    
                </ul>  */}
                {/* <RecentTradesList/> */}
                {/* <Sidebar/> */}
                
        </div>
        )
    }



export default withAuth(Homepage);