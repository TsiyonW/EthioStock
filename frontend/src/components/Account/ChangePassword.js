import React, {useState} from 'react'
import { useMutation } from '@apollo/client'
import { Form, Button,Input } from "antd";
import { CHANGE_PASSWORD } from "../../gql/mutation/account";
import { Link } from "react-router-dom";
import { PasswordInput } from 'antd-password-input-strength'

const ChangePassword =(props)=> {
    let [errMessage, setErrorMessage] = useState('');
    let [showLoginLink, setShowLoginLink] = useState(false);
    let [showPasswordChange, setShowPasswordChange] = useState(true);


    const [changePass] = useMutation(CHANGE_PASSWORD,
        {
            onCompleted(changePass){
                const { success, errors } = changePass.passwordChange;
                if(!success){
                    setShowPasswordChange(showPasswordChange=true)
                    setErrorMessage(errMessage=errors[Object.keys(errors)[0]][0].message)
                } 
                if(success){
                    setShowLoginLink(showLoginLink=true)
                    setShowPasswordChange(showPasswordChange=false)
                    setErrorMessage(errMessage="Password Changed Successfully")
                }
               
            }}
            
        )
        

        const onFinish = (values) => {
            console.log("values Recieved", values)
            changePass({variables:{
                            oldPassword:values.oldPassword, 
                            newPassword1:values.newPassword1,
                            newPassword2:values.newPassword2
            
            }})
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
            <div style={showPasswordChange?showStyle:hideStyle} >
            <Form name="verify-account" onFinish={onFinish}>
                <Form.Item name="oldPassword" label="Old Password"
                rules={[
                    { required: true, message: 'Please enter your old password!', },
                ]}
                
                >
                    <Input.Password/>
                </Form.Item>

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

                    <Form.Item >
                      <Button type="primary" htmlType="submit">  Reset Password  </Button>
                    </Form.Item>

            </Form>
            </div>

            <div style={showLoginLink?showStyle:hideStyle} >
                <Button className="signup-link">
                        <Link to="/login"> Log in</Link>
                </Button>
            </div>
            
        </div>
    )
}

export default ChangePassword