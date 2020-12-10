import React from "react";
import "../../styles/styles.scss";
import { Form, Button, } from "antd";
import "antd/dist/antd.css";
import auth from "../../Auth";
import { VERIFY_ADMIN_ACCOUNT } from "../../gql/mutation/account";
import { useMutation} from '@apollo/client'
import {Redirect} from 'react-router-dom'
import withAuth from "../../routers/withAuth";
import 'antd/dist/antd.css';
import Header from '../Businessowner/Header';

const VerifyMyAdminAccount= (props)=>{

  const userProfile = props.user
 
  const [verifyMyAcc] = useMutation(VERIFY_ADMIN_ACCOUNT,
    {
        onCompleted(verifyMyAcc){
            const {  success, message } = verifyMyAcc.createAdmin;
            if(success){
                console.log("success", message)
            }
            if(!success){
                console.log(message)
            }
        }})

  const onFinish = (values) => {
      console.log(userProfile)

      
    verifyMyAcc({variables:{accountId:userProfile.pk}})
  }
  const handleLogout=(e)=>{
    auth.logOut()
    return(<Redirect to="/login" />)
}
const displaySideBar=()=>{
    document.getElementById("sidebar-container-s").style.display = "block";
}
// const closeSideBar=()=>{
//     document.getElementById("sidebar-container-s").style.display = "none";
// }

if(userProfile.userType!=='Admin' | userProfile.accountLinked){
    return(
      <Redirect to="/adminhomepage"/>
    )
  }

   

    return(
      <div className = "signup-container ">                              
        
        <Header handleLogout = {handleLogout} userType={userProfile.userType} headerButtons={false}  displaySideBar = {displaySideBar}/>

        <div className = "signup-content">
          <h1>Verify My Admin Account</h1>

          <Form onFinish={onFinish}>

            <Form.Item>
              <Button type="primary" htmlType="submit">Verify Admin</Button>
            </Form.Item>

          </Form>
          
        </div>   
      </div> 
    );
  }

export default withAuth(VerifyMyAdminAccount)