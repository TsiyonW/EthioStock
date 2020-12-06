import React ,{Component} from 'react';
import { Form,Input, Button,Select} from 'antd';

import { Redirect } from "react-router-dom";
import { Mutation } from "@apollo/client/react/components";
import { SIGNUP_USER } from '../../gql/mutation/account'
import LoginSignupHeader from './LoginSignupHeader';
// import SignupInvestorPage from './SignupInvestor'
// import auth from "../../Auth";
import 'antd/dist/antd.css';
import '../styles/styles.scss';

const FormItem = Form.Item;
const Option = Select.Option;

class SignupUser extends Component{
  state = {
    email:'',
    username:'',
    userType:'',
    phoneNo:'',
    subcity:'',
    woreda:0,
    address:'',
    password1:'',
    password2:'',
    confirmDirty: false,
    redirectToinvestor:false
  };
  fileSelectedHandler = (e)=>{

  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        this.setState({ 
            email:values.email,
            username:values.username,
            userType:values.userType,
            phoneNo:values.phoneNo,
            subcity:values.subcity,
            woreda:values.woreda,
            address:values.address,
            password1:values.password1,
            password2:values.password1,
        });
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password1')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['password1'], { force: true });
    }
    callback();
  }
  redirectToInvestorSignup=()=>{
    this.setState({redirectToinvestor:true})
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  _confirm(data) {
      console.log("here si the data")
      console.log(data)
    // const { token, profilePic } = data.createBusinessowner;
    // auth.login(token);
    // console.log("The profilePic img path returned: ",profilePic)
    // this.props.history.push('/homepage')

  }
  render(){
    const {email, username, userType, phoneNo, subcity, woreda, address, password1, password2} = this.state
    
    const { getFieldDecorator } = this.props.form

    // a phone nubmer prefix
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '251',
    })(
      <Select style={{ width: 70 }}>
        <Option value="251">+251</Option>
      </Select>
    )
    
    if(this.state.redirectToinvestor){
      return(
        <Redirect to='/signupinvestor'/>
        // <Homepage/>
      )
    }
    return(
      <div className = "signup-container ">                              {/*Open Signup Container*/}
        
        <LoginSignupHeader/>

        <div className = "signup-content">               {/*Open Signup Content*/}
          <h1>SignUp User
          <Button onClick = {this.redirectToInvestorSignup}>Signup Investor</Button></h1>
          <Mutation
                  mutation={ SIGNUP_USER }
                  variables={{     
                    email,
                    username,
                    userType,
                    phoneNo,
                    subcity,
                    woreda,
                    address,
                    password1,
                    password2,
                }}
                  onCompleted={(data) => {
                    console.log("Here is the data returned ",data)
                    this._confirm(data)
                  }}
                  >
                                
        {(mutation, {loading, error})=>(
          <Form onSubmit={this.handleSubmit} encType='multipart/form-data' method="post">
             {loading && <p>loading...</p>}
                  {error && (
                    <p className="authentication-error">
                      Please, inter valid credentials
                      {error.message}
                    </p>
                  )}

            <FormItem label="email">
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input />
              )}
            </FormItem>

            <FormItem  label="username">

              {getFieldDecorator('username', {
                rules: [
                    { required: true, message:'Please input a username' },
                    { min: 5, message: 'Username must be minimum 5 characters.' },
                    { max: 18, message: 'Username must be less than 18 characters.' },
            ],
              })(
                <Input style={{ width: '100%' }} type = 'text' />
              )}
            </FormItem>

            <FormItem  label="userType">
          {getFieldDecorator('userType', {
            rules: [{ required: true, message: 'Please select user type!' }],
          })(
            <Select
              placeholder="Select User Type"
              onChange={this.handleSelectChange}
              
            >
              <Option value="Admin">Admin</Option>
              <Option value="Businessowner">Business</Option>
              <Option value="Investor">Investor</Option>
            </Select>
          )}
        </FormItem>

        <FormItem  label="phone">
              {getFieldDecorator('phoneNo', {
                rules: [
                    { required: true, message: 'Please input your phone number!' },
                    { min: 9, message: 'Phone no is 9 characters' },
                    { max: 9, message: 'Phone no is 9 characters' },
                ],
              })(
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} type = "number"/>
              )}
            </FormItem>


            <FormItem  label="subcity">
              {getFieldDecorator('subcity', {
                rules: [{ required: false }],
              })(
                <Input style={{ width: '100%' }} type = "text" />
              )}
            </FormItem>

            <FormItem  label="woreda">
              {getFieldDecorator('woreda', {
                rules: [{ required: false }],
              })(
                <Input style={{ width: '100%' }} type = 'number' />
              )}
            </FormItem>

            <FormItem  label="address">
              {getFieldDecorator('address', {
                rules: [{ required: true, message:"Business Name is required" }],
              })(
                <Input style={{ width: '100%' }} />
              )}
            </FormItem>


            <FormItem label="password">
              {getFieldDecorator('password1', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.checkConfirm,
                }],
              })(
                <Input.Password type="password" />
              )}
            </FormItem>

            <FormItem  label="confirm password">
              {getFieldDecorator('password2', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.checkPassword,
                }],
              })(
                <Input.Password type="password" onBlur={this.handleConfirmBlur} />
              )}
            </FormItem>
            

            <FormItem>
              <Button type="primary" htmlType="submit" onClick={mutation}>Register</Button>
            </FormItem>
          </Form>
           )}
          </Mutation> 
                        
        </div> {/* Close Signup content */}
      {/*Close Signup Container*/}      
      </div> 
    );
  }
}
SignupUser = Form.create()(SignupUser)
export default SignupUser