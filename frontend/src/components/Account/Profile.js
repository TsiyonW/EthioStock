// import React, {Component} from 'react'
// import Header from '../Businessowner/Header'
// import auth from '../../Auth'
// import SideBar from "./Sidebar";
// import withAuth from '../../routers/withAuth'
// class Profile extends Component{
//     logout= (e)=>{
//         auth.logOut()
//         this.props.history.push('/login')
//     }
   

//     displaySideBar=()=>{
//         document.getElementById("sidebar-container-s").style.display = "block";
//     }
//     closeSideBar=()=>{
//         document.getElementById("sidebar-container-s").style.display = "none";
//     }
       
//     render(){
//         const userProfile = this.props.user
        
//         return(
//             <div>
//                  <Header handleLogout = {this.logout} userType={userProfile.userType} headerButtons={false}  displaySideBar = {this.displaySideBar}/>
//                  <SideBar closeSideBar= {this.closeSideBar}/>
                
//                 <p>profile page</p>
//                 <p>First Name: {userProfile.firstName}</p>
//                 <p>Middle Name: {userProfile.middleName}</p>
//                 <p>Last Name: {userProfile.lastName}</p>
//                 <p>E-Mail: {userProfile.email}</p>
//                 <p>Username: {userProfile.username}</p>
//                 <p>Phone Number: {userProfile.phoneNo}</p>
//                 <p>Subcity: {userProfile.subcity}</p>
//                 <p>User Type: {userProfile.userType}</p>
//                 <p>woreda: {userProfile.woreda}</p>
//                 <p>Account Linked: {userProfile.accountLinked}</p>
//             </div>
//         )
//     }
// }

// export default withAuth(Profile)
import React, {Component} from 'react'
import Header1 from './Header1'
import auth from '../../Auth'
import SideBar from "../Investor/Sidebar";
import withAuth from '../../routers/withAuth'
import {Card , Image,Divider,Button,Upload ,Steps,Row,Col,Layout} from 'antd';
import { assertNamedType } from 'graphql';
import Avatar from 'antd/lib/avatar/avatar';
const { Step } = Steps;
const {  Footer } = Layout;
const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
      <p className="site-description-item-profile-p-label">{title}:</p>
      {content}
    </div>
  );
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
            <div className="profile_content">
                 <Header1 handleLogout = {this.logout} userType={userProfile.userType} headerButtons={false}  displaySideBar = {this.displaySideBar}/>
                 <SideBar closeSideBar= {this.closeSideBar}/>
            <Card style={{width:1100 , textAlign:"center"  , marginLeft:200 ,marginTop:100 , height:750 , borderRadius:20 }}>
            <Card  style={{background:'whitesmoke',height:200}}>
            <h1 style={{marginTop:130 , marginRight:600}}> @ {userProfile.username}</h1>

            </Card>


        
               
                
<Avatar  size={200}  style={{ color: '#f56a00', backgroundColor: 'white' ,marginRight:700 ,marginTop:-120 }} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png">U</Avatar>

                

                {/* <h2 style={{}}>{userProfile.userType}</h2>
                <h2 style={{}}>{userProfile.username}</h2>
                
                <p>E-Mail: {userProfile.email}</p>
                <p>Username: {userProfile.username}</p>

                <p>Phone Number: {userProfile.phoneNo}</p>
                <p>Subcity: {userProfile.subcity}</p>
                <p>User Type: {userProfile.userType}</p>
                <p>woreda: {userProfile.woreda}</p>
                <p>Account Linked: {userProfile.accountLinked}</p> */}
             
                <div className="profile-step">
                                        <Steps size="small" current={2} >
                                            <Step title="Starting" />
                                            <Step title="In Progress" />
                                            <Step title="Waiting" />
                                            <Step title="Finished" />
                                        </Steps>
                                </div>
                               
                                {/* <div className ="Cont-left">
                                    <Divider orientation="left" dashed>Personal Detail</Divider><br/>
                                    <h4><space/>UserName</h4><br/><p >{userProfile.username}</p>
                                    <h4 > <space/> FirstName / MiddleName / LastName :</h4> <p > {userProfile.firstName} /{userProfile.middleName} /{userProfile.lastName}</p><br/>
                                    <h4>Email :</h4><br/><p >{userProfile.email}</p><br/>
                                    <h4><space/>Phone Number</h4><br/><p >{userProfile.phoneNo}</p>
                                 </div>

                                 <br/>
                             
                                <Divider orientation="left" dashed>Submitting Documents</Divider><br/>
                               
                                  <div className=" btn1">
                                       <Upload  action="#" directory >
                                            <p>Upload File :</p><Button>Upload Directory</Button>
                                        </Upload>
                                   </div>

                              <br/>
                                <Divider orientation="left" dashed>Contact Information</Divider><br/>
                                
                                        
                                        <div className ="Cont-left">
                                        <h > <space/> Street :</h> <p> Mekanissa ,Megenagna ,Bole</p><br/>
                                        <h> <space/> City :</h> <p> Addis Ababa</p><br/>
                                        <h> <space/> Country :</h> <p> Ethiopia</p><br/>
                                        </div>
                                 

                                        <div className ="Cont-right">
                                            <h>   <space/> Phone</h> <p> +251-911-45-44-**</p><br/>
                                            <h ><space/> Email</h> <p> FirstName/ MiddleName / LastName</p><br/>
                                          
                                        </div> */}
                                          <Divider orientation="left" dashed>Personal Detail</Divider><br/>
                                       
          <Row>
            <Col span={12}>
              <DescriptionItem title="Full Name" content={<h>{userProfile.firstName} /{userProfile.middleName} /{userProfile.lastName}</h>}/>
            </Col>
            <Col span={12}>
                                    <DescriptionItem title="Email" content={<h>{userProfile.email}</h>} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Sub-City" content={<h>{userProfile.subcity}</h>} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Woreda" content={<h>{userProfile.woreda}</h>} />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="User Type" content={<h>{userProfile.userType}</h>} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Website" content="-" />
            </Col>
          </Row>
          
         
          <Divider orientation="left" dashed>Contact Detail</Divider><br/>
          
          <Row>
          <Col span={12}>
              <DescriptionItem title="UserName" content={<h>{userProfile.username}</h>} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Email" content={<h>{userProfile.email}</h>} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Phone Number" content={<h>{userProfile.phoneNo}</h>} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Accounted Linked" content={<h>{userProfile.accountLinked}</h>} />
            </Col>
          </Row>
         

             </Card>
             <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
             <Footer style={{ textAlign: 'center'  , marginTop:'auto' ,background:'#CEECE8'}}>Ethiostock ©2020 </Footer>
            </div>
        )
    }
}

export default withAuth(Profile)