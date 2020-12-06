import React ,{useState} from 'react';
import {  Button,Input, Form } from "antd";
import {FORGET_PASSWORD} from '../../gql/mutation/account'
import { useMutation} from '@apollo/client'

const ForgetPassword =()=> {
    // let [email, setEmail] = useState('');
    let [showForgetPass, setShowForgetPass] = useState(true);
    let [showSuccess, setShowSuccess] = useState(false);
    let [errMessage, setErrMessage] = useState('');

    const [resetPassword] = useMutation(FORGET_PASSWORD,
        {
            onCompleted(resetPassword){
                const { success ,errors} = resetPassword.sendPasswordResetEmail;
                if(success){
                    setShowForgetPass({showForgetPass:false})
                    setShowSuccess({showSuccess:true})
                }
                if(!success){
                    setErrMessage(errors[Object.keys(errors)[0]][0].message)
                }
            }
        })


        const hideStyle = {
            display: "None",
          };
        const showStyle = {
            display:"block"
        }

    const onFinish=(values)=>{
        console.log(values)
        resetPassword({variables:{email:values.email}})
    };
        return(
            <div>
                <div>{errMessage}</div>
                <div  style={showForgetPass?showStyle:hideStyle}>
                    <p>ForgetPassword</p>
                    <h2>please input your email</h2>
                    <Form name="login_form" onFinish={onFinish}>
                        <Form.Item name= "email">
                            <Input/>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit">Reset Password</Button>
                        </Form.Item>
                    </Form>
                
                </div>

                <div style={showSuccess?showStyle:hideStyle}>
                    <h2>WE WILL SEND A PASSWORD IF USER EXISTS</h2>
                    <h3>FOLLOW THE LINK IN YOUR EMAIL</h3>
                </div>


            </div>
        )
    }


export default ForgetPassword