import React , {useState}from "react";
import { Link } from "react-router-dom";
import "../../styles/styles.scss";
import { Form, Input, Button, Alert} from "antd";
import {  StockOutlined , 
          FileDoneOutlined, 
          DollarOutlined,
          ReconciliationOutlined, 
          MailOutlined, 
          LockOutlined, } from '@ant-design/icons';
import "antd/dist/antd.css";
import auth from "../../Auth";
import { LOGIN_MUTATION } from "../../gql/mutation/account";
import {GET_IF_FIRST_ADMIN} from "../../gql/query/account"
import LoginSignupHeader from "./LoginSignupHeader";
import store from '../../store'
import { useMutation, useQuery} from '@apollo/client'
import {Redirect } from 'react-router-dom'

const Login =(props)=> {
  let [errMessage, setErrorMessage] = useState('');
  let [errExists, setErrExists] = useState(false)
  //  remove user info if exists
  auth.logOut()
    const { data} = useQuery(GET_IF_FIRST_ADMIN)

    const [signin] = useMutation(LOGIN_MUTATION,
        {
            onCompleted(signin){
                const { token, user, success, errors } = signin.tokenAuth;
                if(!success){
                  setErrExists(errExists = true)
                    setErrorMessage(errMessage =errors[Object.keys(errors)[0]][0].message)

                }
                // If user logged in successfully redirect to ther respective homepage
                if(success){
                    
                    auth.login(token);
                    // store user info to redux state management
                    store.dispatch({type:"user/LOGGEDIN", payload:user})
                    if(user.userType === 'Admin'){
                        if(user.accountLinked)
                        {
                          props.history.push('/adminhomepage')
                               
                        
                        }
                        else{
                          // for the first user(allow verifying self account)
                          if(data.isAdminFirst){
                            props.history.push('/verifymyadminaccount')
                          }
                          else{
                            setErrorMessage(errMessage = "Admin account should be added by existing admin")
                          
                          }
                         }
                    }
                    if(user.userType === 'Businessowner'){
                        if(user.accountLinked){
                            props.history.push('/businesshomepage')
                           
                        }
                        else{
                            props.history.push('/addbusinessinfo')
                        }
                    }
                    
                    if(user.userType === 'Investor'){
                        if(user.accountLinked){
                            props.history.push('/investorhomepage')
                           
                        }
    
                        else{
                          props.history.push('/addinvestorinfo')
                        }
                    }                
    
                }
                            
            }
        }
        )
    const redirectToForgetPassword=()=> {
      return(
        <Redirect to="/forgetpassword"/>
      )
    }

const handleClose=()=>{
  setErrExists(errExists = false  )
}
    const onFinish = (values) => {
        signin({variables:{email:values.email, password:values.password}})
        
    };


    return (
    
      <div className="login-container ">

        <LoginSignupHeader />
        <div className="login-flex-container">
          <div className="login-signup-left-side">
            <p>
              <span className="icon"><StockOutlined /> </span>
              Data analysis and price prediction
            </p>
            <p>
              <span className="icon">  <FileDoneOutlined /> </span>
              Have watchlists
            </p>
            <p>
              <span className="icon"> <DollarOutlined />  </span>
              Apply for stocks and manage your application
            </p>
            <p>
              <span className="icon"> <ReconciliationOutlined /> </span>
              Submit applications through dynamic forms
            </p>
          </div>
          <div className="login-signup-right-side login-form">

            <h1>Login</h1>
            <Form name="login_form" onFinish={onFinish}>
                {errExists?<Alert
                              message="Error"
                              description={errMessage}
                              type="error"
                              showIcon
                              closable 
                              afterClose={handleClose}
                            />:<p></p>}
            
                    <Form.Item  name="email"  label="E-mail "
                      rules={[
                        {type: 'email', message: 'The input is not valid E-mail!',},
                        {required: true, message: 'Please input your E-mail!', },]}
                    >
                      <Input prefix={<MailOutlined  style={{ fontSize: 15 }} />}
                        type="text"
                        placeholder="E-mail"
                       />
                    </Form.Item>



                  <Form.Item name="password" label="Password" rules={ [{ required: true,message: "Please input your Password!"}]} >
                      <Input  prefix={  <LockOutlined type="lock" style={{ fontSize: 15 }} postfix={<LockOutlined />} />}
                        type="password"
                        placeholder="Password"
                      />
                  </Form.Item>
                  
                  <Button
                    className="login-form-forgot signup-link"
                    onClick={redirectToForgetPassword}>
                    <Link to="/forgetpassword">Forgot password?</Link>
                  </Button>

                  <Form.Item>
                    <Button  htmlType="submit" className="login-form-button login-submit-btn" >
                      Log in
                    </Button>

                    <div>
                      Don't have an account?
                      <Button className="signup-link">
                        <Link to="/signup"> Sign up</Link>
                      </Button>
                    </div>
                  </Form.Item>
                </Form>

          </div>
        </div>
      </div>
    );
  }


export default Login;
