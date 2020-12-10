import React ,{Component} from 'react';
import { Form, Input, Button,Select, Radio} from 'antd';
import { Redirect } from "react-router-dom";
import { Mutation } from "@apollo/client/react/components";
import { SIGNUP_INVESTOR } from '../../gql/mutation/account'
import LoginSignupHeader from './LoginSignupHeader';
import 'antd/dist/antd.css';
import '../styles/styles.scss';
import auth from "../../Auth";

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class SignupAdmin extends Component{
  state = {
    confirmDirty: false,
    email:'',
    firstName:'',
    lastName:'',
    password:'',
    phoneNo:'',
    sex:'',
    username:'',
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({
          email:values.email, 
          firstName:values.firstName,
          lastName:values.lastName,
          password:values.password,
          phoneNo:values.phoneNo,
          sex:values.sex,
          username:values.username, 
        
        })
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
   _confirm(data) {
    const { token } = data.createInvestor;
    auth.login(token);
    console.log("The data returned: ",token)
    this.props.history.push('/homepage')

  }

  render(){
    const { getFieldDecorator } = this.props.form
    const { nationality, email ,firstName, lastName, password, phoneNo, sex, subcity, username, woreda } = this.state;
    
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '251',
    })(
      <Select style={{ width: 70 }}>
        <Option value="251">+251</Option>
      </Select>
    );

    if(this.state.redirectToBusiness){
      return(
        <Redirect to='/signupbusiness'/>
        // <Homepage/>
      )
    }
    return(
      
      <div className = "signup-container ">                              {/*Open Signup Container*/}
        
        <LoginSignupHeader/>

        <div className = "signup-content">               {/*Open Signup Content*/}
          <h1>SignUp Investor or sigup <Button onClick={this.redirectToBusinessSignup}>BusinessOwner</Button></h1>
          <Mutation
                  mutation={ SIGNUP_INVESTOR }
                  variables={{ nationality, email, firstName, lastName, password, phoneNo, sex, subcity, username, woreda }}
                  onCompleted={
                    (data) => {
                      console.log("Here is the data returned ",data)
                      this._confirm(data)
                    
                  }
                  }
                  >
                                
        {(mutation, {loading, error})=>(
          <Form onSubmit={this.handleSubmit}>
             {loading && <p>loading...</p>}
                  {error && (
                    <p className="authentication-error">
                      {/* {
                    console.log("the errorrrrrrrrrrrrrr",error.message)} */}
                      Please, inter valid credentials
                      {error.message}
                    </p>
                  )}
            <FormItem label="E-mail" >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail!',
                }, {
                  required: true, message: 'Please input your E-mail!',
                }],
              })(
                <Input 
                  onChange={e => this.setState({ email: e.target.value })}
                />
              )}
            </FormItem>
            <FormItem label="Password"
               
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="password" 
                onChange={e =>
                  this.setState({ password: e.target.value })
                }/>
              )}
            </FormItem>
            <FormItem label="Confirm Password"
               
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'Please confirm your password!',
                }, {
                  validator: this.checkPassword,
                }],
              })(
                <Input type="password" onBlur={this.handleConfirmBlur} />
              )}
            </FormItem>
            
            
            <FormItem label="Phone Number"
            >
              {getFieldDecorator('phoneNo', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} type = "number"
                onChange={e =>
                  this.setState({ phoneNo: e.target.value })
                }
                />
              )}
            </FormItem>
      
            <FormItem label="First name">
              {getFieldDecorator('firstName', {
                rules: [{ required:  true, message:'Please input a First name'  }],
              })(
                <Input style={{ width: '100%' }} type = 'text' 
                onChange={e =>
                  this.setState({ firstName: e.target.value })
                }
                />
              )}
            </FormItem>

            <FormItem label="Last name" >
              {getFieldDecorator('lastName', {
                rules: [{ required:  true, message:'Please input Last name'  }],
              })(
                <Input style={{ width: '100%' }} type = 'text'
                onChange={e =>
                  this.setState({ lastName: e.target.value })
                } />
              )}
            </FormItem>


            <FormItem label="Username">

              {getFieldDecorator('username', {
                rules: [{ required: true, message:'Please input a username' }],
              })(
                <Input style={{ width: '100%' }} type = 'text' 
                onChange={e =>
                  this.setState({ username: e.target.value })
                }/>
              )}
            </FormItem>


            <FormItem label="Subcity">
              {getFieldDecorator('subcity', {
                rules: [{ required: false }],
              })(
                <Input style={{ width: '100%' }} type = "text" 
                onChange={e =>
                  this.setState({ subcity: e.target.value })
                }/>
              )}
            </FormItem>


            <FormItem label="woreda" >
              {getFieldDecorator('woreda', {
                rules: [{ required: false }],
              })(
                <Input style={{ width: '100%' }} type = 'number'
                onChange={e =>
                  this.setState({ woreda: e.target.value })
                } />
              )}
            </FormItem>


            <FormItem label="Sex"
             
          >
            {getFieldDecorator('sex',{
              rules:[{ required:true, message:'Please choose its required field'}],
            })(
              <RadioGroup 
              onChange={e =>
                this.setState({ sex: e.target.value })
              }>
                <Radio value="Female">Female</Radio>
                <Radio value="Male">Male</Radio>
              </RadioGroup>
            )}
          </FormItem>



          <FormItem label="Nationality">

              {getFieldDecorator('nationality', {
                rules: [{ required: true, message:'Please input nationality' }],
              })(
                <Input style={{ width: '100%' }} type = 'text' 
                onChange={e =>
                  this.setState({ nationality: e.target.value })
                }/>
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
SignupAdmin = Form.create()(SignupAdmin)
export default SignupAdmin