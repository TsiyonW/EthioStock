import React from 'react';
import {Form,Input,Select,Modal,Button, Radio} from 'antd';
import { Mutation } from "@apollo/client/react/components";
import { PasswordInput } from 'antd-password-input-strength'
import '../../styles/styles.scss';
import 'antd/dist/antd.css';
import {REGISTER_USER} from '../../gql/mutation/account'
import { Redirect } from 'react-router-dom';
const { Option } = Select;

const RadioGroup = Radio.Group;
class RegisterUser extends React.Component {
    formRef = React.createRef();
    state = {
        email:'',
        username:'',
        firstName:'',
        middleName:'',
        lastName:'',
        sex:'',
        userType:'',
        phoneNo:'',
        subcity:'',
        woreda:0,
        address:'',
        password1:'',
        password2:'',
        modalVisible:false,    
        errorResults : {},
        registerSuccess:false,

      };
      showModal = () => {
        this.setState({
          modalVisible: true,
        });
      };

      hideModal = () =>{
        this.setState({
            modalVisible: false,
          });       
      }

      getMutationResponse = (data)=>{
        const { errors , success} = data.register;
        console.log(data)
        this.hideModal()
        this.setState({registerSuccess:success})
        this.setState({errorResults:errors})
      }
      onFinish = (values) => {
        this.setState({
            email:values.email,
            username:values.username,
            firstName:values.firstName,
            middleName:values.middleName,
            lastName:values.lastName,
            sex:values.sex,
            userType:values.userType,
            phoneNo:values.phoneNo,
            subcity:values.subcity,
            woreda:values.woreda,
            address:values.address,
            password1:values.password1,
            password2:values.password2,
            modalVisible: true,
          
        })
       
  
        };
      onReset = () => {
        this.formRef.current.resetFields();
      };
      
      render() {
        const {email,username, firstName, middleName, lastName, sex,userType, phoneNo, subcity,woreda, address, password1, password2,errorResults,registerSuccess} = this.state
        const prefixSelector = (
        <Form.Item name="prefix" noStyle>
              <Select
                style={{
                  width: 70,
                }}
              >
                <Option value="251">+251</Option>
              </Select>
            </Form.Item>
          );

        if(registerSuccess){
            return ( <Redirect to="/createaccountsuccess"/>)
        }

        return (
            <div>
                <Modal
                  title="User Registration"
                  visible={this.state.modalVisible}
                  footer={[
                      <Button key="cancel" onClick={this.hideModal}>Return</Button>,
                      <Mutation
                        key="creatUserMutation"
                        mutation={REGISTER_USER}
                        variables={{email,username,firstName, middleName, lastName, sex,userType,phoneNo,subcity,woreda,address, password1, password2}}
                        onCompleted={data=>this.getMutationResponse(data)}
                      >{
                          (mutation, {loading, error})=>(
                              <span>
                                  <Button key="submit" onClick={mutation}>Submit</Button>
                              </span>
                          )
                        }
                      </Mutation>
                  ]}
                >
                  <p>Email: {email}</p>
                  <p>Username: {username}</p>
                  <p>First Name:  {firstName}</p>
                  <p>Middle Name:  {middleName}</p>
                  <p>Last Name:  {lastName}</p>
                  <p>Sex:  {sex}</p>
                  <p>User Type: {userType}</p>
                  <p>Phone Number: {phoneNo}</p>
                  <p>Subcity: {subcity}</p>
                  <p>Woreda: {woreda}</p>
                  <p>Address: {address}</p>
                </Modal>

                <p  className="authentication-error">{Object.keys(errorResults).length!==0?errorResults[Object.keys(errorResults)[0]][0].message:""}</p>
                
                <Form  ref={this.formRef} name="register_user" onFinish={this.onFinish}>
                    <Form.Item  name="firstName"  label="First Name" 
                      rules={[{required: true, message: 'Please input firstname!',}, ]}
                    >
                      <Input />
                    </Form.Item>  

                    <Form.Item  name="middleName"  label="Middle Name"
                      rules={[ {required: true, message: 'Please input Middle name!',}, ]}
                    >
                      <Input />
                    </Form.Item> 

                    <Form.Item  name="lastName"  label="Last Name"
                      rules={[ {required: true, message: 'Please input Last name!',}, ]}
                    >
                      <Input />
                    </Form.Item>  

                    <Form.Item  name="email"  label="E-mail"
                      rules={[
                        {type: 'email', message: 'The input is not valid E-mail!',},
                        {required: true, message: 'Please input your E-mail!', },]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item  name="username"  label="Username"
                      rules={[
                        {required: true, message: 'Please input username!',}, ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item label="User Type" name = "userType"
                      rules= {[{ required: true, message: 'Please select your gender!' } ]}
                      >
                        <Select placeholder="Select UserType" >
                          <Option value="Admin">Admin</Option>
                          <Option value="Businessowner">Business</Option>
                          <Option value="Investor">Investor</Option>
                        </Select>
                      </Form.Item>

                    <Form.Item  name="phoneNo"  label="Phone Number"
                      rules={[
                        {required: true,message: 'Please input your phone number!', }, ]}
                    >
                      <Input addonBefore={prefixSelector} style={{width: '100%',}} />
                    </Form.Item>

                    <Form.Item name="sex" label="Sex" rules= {[{ required:  true, message:'Please choose sex' }]}>
                      <RadioGroup>
                        <Radio value="Female">Female</Radio>
                        <Radio value="Male">Male</Radio>
                      </RadioGroup>
                    </Form.Item>


                    <Form.Item   name="subcity"  label="Subcity"
                      rules={[
                        {required: true, message: 'Please input subcity!',  },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item name="woreda" label="Woreda"
                      rules={[
                        {
                          required: true,
                          message: 'Please input woreda!',
                        },
                      ]}
                    >
                      <Input type="number" />
                    </Form.Item>

                    <Form.Item name="address" label="Address"
                      rules={[
                        {required: true, message: 'Please input Address!', }, ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item name="password1"  label="Password"
                      rules={[
                          { min:8, message:"Password should be more than 8 characters" },
                          { max:18, message:"Password shouldn't be more than 18 characters" },
                          { required: true, message: 'Please input your password!',}, ]}
                      hasFeedback
                    >
                      <PasswordInput />
                    </Form.Item>

                    <Form.Item  name="password2"  label="Confirm Password"   hasFeedback
                      rules={[
                        { required: true, message: 'Please confirm your password!', },
                        ({ getFieldValue }) => ({
                          validator(rule, value) {
                            if (!value || getFieldValue('password1') === value) {
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
                      <Button type="primary" htmlType="submit">  Register  </Button>
                    </Form.Item>
                </Form>

            </div> );
                      
          }
        }


export default RegisterUser
