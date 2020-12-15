import React, {useState} from 'react'
import { useMutation } from '@apollo/client'
import { Form,Card, Button, Input} from "antd";
import {
  LockFilled
} from '@ant-design/icons';

import { RESET_PASSWORD } from "../../gql/mutation/account";
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import { PasswordInput } from 'antd-password-input-strength'

const ResetPassword =()=> {
    let [errMessage, setErrorMessage] = useState('');
    let [showLoginLink, setShowLoginLink] = useState(false);
    let [showRestBtn, setshowRestBtn] = useState(true);


    const [reset] = useMutation(RESET_PASSWORD,
        {
            onCompleted(reset){
                const { success, errors } = reset.passwordReset;
                if(!success){
                    setshowRestBtn(showRestBtn=true)
                    setErrorMessage(errMessage=errors[Object.keys(errors)[0]][0].message)
                } 
                if(success){
                    setShowLoginLink(showLoginLink=true)
                    setshowRestBtn(showRestBtn=false)
                    setErrorMessage(errMessage="Password Reseted Successfully")
                }
               
            }}
            
        )
        

        const { token } = useParams();

        const onFinish = (values) => {
            console.log("Values Recieved", values)
            reset({variables:{token,newPassword1:values.newPassword1, newPassword2:values.newPassword2 }})
        };
        
        const hideStyle = {
            display: "None",
          };
        const showStyle = {
            display:"block"
        }


        return(
          <div>
              
              <div>
                  <p>{errMessage}</p>
              </div>
              <div style={showRestBtn?showStyle:hideStyle} >
              <Card style={{width:750 ,height:215 , marginTop:100, marginLeft:400 ,background:"whitesmoke"}}>
              <h3><LockFilled /> Enter your email adress and we'll send you a link to reset your password.</h3>
  
  
              <Form name="verify-account" onFinish={onFinish}>
              <Card style={{width:750 ,height:250 , marginTop:25, marginLeft:-25 ,background:"white"}}>
                  
              <Form.Item name="newPassword1"  label="Password"
                        rules={[
                            { min:8, message:"Password should be more than 8 characters" },
                            { max:18, message:"Password shouldn't be more than 18 characters" },
                            { required: true, message: 'Please input your password!',}, ]}
                        hasFeedback
                      >
                        <PasswordInput />
                      </Form.Item>
  
                      <Form.Item  name="newPassword2"  label="Confirm Password"   hasFeedback
                        rules={[
                          { required: true, message: 'Please confirm your password!', },
                          ({ getFieldValue }) => ({
                            validator(rule, value) {
                              if (!value || getFieldValue('newPassword1') === value) {
                                return Promise.resolve();
                              }
  
                              return Promise.reject('The two passwords that you entered do not match!');
                            },
                          }),
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>
                      <Form.Item> <Button htmlType="submit" className="forgetPass_btn"  style={{ background: "rgb(46,175,143)", borderColor: "rgb(46,175,143)" ,color:'white' }}>Reset Password</Button>
                             
                          </Form.Item>
                      </Card>
  
              </Form>
              </Card>
              </div>
  
              <div style={showLoginLink?showStyle:hideStyle} >
                  <Button className="signup-link">
                          <Link to="/login"> Log in</Link>
                  </Button>
              </div>
              
          </div>
      )
}

export default ResetPassword