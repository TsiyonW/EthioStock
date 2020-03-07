import React ,{Component} from 'react';
import { Form, Input, Button,Select, Upload, Icon, Radio} from 'antd';
import ReactDOM from 'react-dom'

import LoginSignupHeader from './LoginSignupHeader';
import SignupInvestorPage from './SignupInvestor'

import 'antd/dist/antd.css';
import '../styles/styles.scss';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class SignupBusiness extends Component{
  state = {
    confirmDirty: false
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
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
  redirectToInvestorSignup(){
    ReactDOM.render(<SignupInvestorPage />, document.getElementById('root'));
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  
  render(){
    const { getFieldDecorator } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '251',
    })(
      <Select style={{ width: 70 }}>
        <Option value="251">+251</Option>
      </Select>
    );

   

    return(
      <div className = "signup-container ">                              {/*Open Signup Container*/}
        
        <LoginSignupHeader/>

        <div className = "signup-content">               {/*Open Signup Content*/}
          <h1>SignUp BusinessOwner or  
          <Button onClick = {this.redirectToInvestorSignup}>Signup Investor</Button></h1>
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label="E-mail"
               
            >
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
            <FormItem
              {...formItemLayout}
              label="Password"
               
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }, {
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="password" />
              )}
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Confirm Password"
               
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
            
            
            <FormItem
              {...formItemLayout}
              label="Phone Number"
            >
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input your phone number!' }],
              })(
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} type = "number"/>
              )}
            </FormItem>
            
            

            <FormItem
              {...formItemLayout}
              label="Website"
               
            >
              {getFieldDecorator('website', {
                rules: [{ required: false }],
              })(
                <Input style={{ width: '100%' }} type = 'text'/>
              )}
            </FormItem>



            <FormItem
              {...formItemLayout}
              label="First name"
               
            >
              {getFieldDecorator('firstname', {
                rules: [{ required:  true, message:'Please input a First name'  }],
              })(
                <Input style={{ width: '100%' }} type = 'text' />
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="Last name"
               
            >
              {getFieldDecorator('lastname', {
                rules: [{ required:  true, message:'Please input Last name'  }],
              })(
                <Input style={{ width: '100%' }} type = 'text' />
              )}
            </FormItem>


            <FormItem
              {...formItemLayout}
              label="Username"
               
            >

              {getFieldDecorator('username', {
                rules: [{ required: true, message:'Please input a username' }],
              })(
                <Input style={{ width: '100%' }} type = 'text' />
              )}
            </FormItem>


            <FormItem
              {...formItemLayout}
              label="Subcity"
               
            >
              {getFieldDecorator('subcity', {
                rules: [{ required: false }],
              })(
                <Input style={{ width: '100%' }} type = "text" />
              )}
            </FormItem>


            <FormItem
              {...formItemLayout}
              label="woreda"
               
            >
              {getFieldDecorator('woreda', {
                rules: [{ required: false }],
              })(
                <Input style={{ width: '100%' }} type = 'number' />
              )}
            </FormItem>


            <FormItem
            
          {...formItemLayout}
          label="Gender"
        >
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please select your gender!' }],
          })(
            <Select
              placeholder="Select Gender"
              onChange={this.handleSelectChange}
              
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          )}
        </FormItem>



























































            <FormItem
              {...formItemLayout}
              label="Business Name"
               
            >
              {getFieldDecorator('business', {
                rules: [{ required: true, message:"Business Name is required" }],
              })(
                <Input style={{ width: '100%' }} />
              )}
            </FormItem>

            <FormItem
            {...formItemLayout}
            label="Category"
             
          >
            {getFieldDecorator('category', {
              rules: [{ required:  true, message:'Please choose a category' }]
            })(
              <RadioGroup>
                <Radio value="Bank">Bank</Radio>
                <Radio value="Factory">Factory</Radio>
                <Radio value="Other">Other</Radio>
              </RadioGroup>
            )}
          </FormItem>

            <FormItem
            {...formItemLayout}
            label="Legality Document"
            extra="Upload Legality Document"
             
            >
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              required:true, message: 'Please upload legality document'
            })(
              <Upload name="logo" action="/upload.do" listType="picture">
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </FormItem>





            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">Register</Button>
            </FormItem>
          </Form>

        </div> {/* Close Signup content */}
      {/*Close Signup Container*/}      
      </div> 
    );
  }
}

export default SignupBusiness = Form.create()(SignupBusiness)