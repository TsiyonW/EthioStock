import React ,{Component} from 'react';
import { Form,Input,Modal,Upload,Button, Radio} from 'antd';
import { Redirect } from "react-router-dom";
import { UploadOutlined } from '@ant-design/icons';
import withAuth from '../../routers/withAuth'
import Header from './Header'
import auth from '../../Auth'
import { Mutation } from "@apollo/client/react/components";
import { ADD_BUSINESSOWNER_INFO } from '../../gql/mutation/account'
import store from '../../store'
import 'antd/dist/antd.css';
import '../../styles/styles.scss';

import SideBar from "./Sidebar";
const FormItem = Form.Item;
// const Option = Select.Option;
const RadioGroup = Radio.Group;

class AddBusinessInfo extends Component{
  state = {
    businessName:"",   
    website:"",
    category:"",   
    legality:null,
    profilePic:null,
    
    modalVisible:false,    
    resultMessage : '',
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
  doNothing=()=>{
    console.log("do nothing")
  }

  getMutationResponse = (data)=>{
    const { message , success} = data.createBusinessowner;
    console.log(data)
    this.hideModal()
    this.setState({registerSuccess:success})
    console.log(message)
    this.setState({resultMessage:"wait"})
  }

  onFinish = (values) => {
      console.log("Recieved values", values)
        this.setState({ 
          businessName:values.businessName,
          website:values.website,
          category:values.category,
          profilePic:values.profilePic,
          legality:values.legality,
          modalVisible: true,
      
        });
      
  }
  handleProfileupload = info => {
    let fileList = [...info.fileList];  
    console.log(fileList[0])
    const formData = new FormData();
    formData.append("profilePic",fileList[0])
    console.log(formData.get('profilePic'))
    this.setState({profilePic:formData})
  }
  handleLegalityupload = info => {
    let fileList = [...info.fileList];
    console.log(fileList[0])
    const formData = new FormData();
    formData.append("legality",fileList[0])
    console.log("legality", formData.get('legality'))
    this.setState({legality:formData})
  }
  handleLogout=(e)=>{
    auth.logOut()
    return(<Redirect to="/login" />)
    // this.props.history.push('/login')
}
displaySideBar=()=>{
    document.getElementById("sidebar-container-s").style.display = "block";
}
closeSideBar=()=>{
    document.getElementById("sidebar-container-s").style.display = "none";
}
  render(){

    const { businessName,  website, category, legality, profilePic,registerSuccess,resultMessage} = this.state
    const {users} = store.getState()
    if(users.user.accountLinked){
      return(
        <Redirect to='/updatebusiness'/>
      )
    }
    if(registerSuccess){
      return(
        <Redirect to='/businesshomepage'/>
      )
    }
    const userProfile = this.props.user
   
    return(
      <div className = "signup-container ">                              
        
        <Header handleLogout = {this.handleLogout} userType={userProfile.userType} headerButtons={false}  displaySideBar = {this.displaySideBar}/>

        <SideBar closeSideBar= {this.closeSideBar}/>
                

        <div className = "signup-content">
          <h1>Add Business Owner Info</h1>
          <p  className="authentication-error">{resultMessage}</p>

          <Modal
            title="Business Owner Info"
            key="addBusinessModal"
            visible={this.state.modalVisible}
            footer={
              [
                <Button key="addBusinessCancel"  onClick={this.hideModal}>Cancel</Button>,
                <Mutation
                  key="addBusinessMutation"
                  mutation={ADD_BUSINESSOWNER_INFO}
                  variables={{
                    businessName,  
                    website, 
                    category, 
                    legality, 
                    profilePic
                  }}
                  onCompleted={data=>this.getMutationResponse(data)}
                >{
                  (mutation, {loading,error})=>(
                    <span>
                      <Button key="addBusinessSubmit" onClick={mutation}>Save</Button>
                    </span>
                  )
                }

                </Mutation>
              ]
            }
          >

            <div>{website?<p>Website: {website}</p>:""}</div>
            <p>Business Name: {businessName}</p>
            <p>Category: {category}</p>
            {/* <div>{profilePic?<p>Profile Picture: {profilePic}</p>:""}</div>
            <div>{legality?<p>Legality Document: {legality}</p>:""}</div> */}
    

          </Modal>

          <Form ref={this.formRef} onFinish={this.onFinish}>
 
            <FormItem name="website"  label="website" rules={[{ required: false }]}>
                <Input style={{ width: '100%' }} type = 'text'/>
            </FormItem>



            <FormItem name="businessName"  label="Business Name" rules={[{ required: true, message:"Business Name is required" }]}>
                <Input style={{ width: '100%' }} />
            </FormItem>


            <FormItem name="category" label="category" rules= {[{ required:  true, message:'Please choose a category' }]}>
              <RadioGroup>
                <Radio value="Bank">Bank</Radio>
                <Radio value="Factory">Factory</Radio>
                <Radio value="Other">Other</Radio>
              </RadioGroup>
          </FormItem>
          
          
          <FormItem
                name="legality"
                label="Upload legality document "
                valuePropName="file"
              >
              <Upload onChange={this.handleLegalityupload} customRequest={this.doNothing}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </FormItem>         

          <FormItem
                name="profilePic"
                label="Upload Profile Picture "
                valuePropName="file"
              >
              <Upload onChange={this.handleProfileupload} customRequest={this.doNothing}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </FormItem>

            <FormItem>
              <Button type="primary" htmlType="submit">Register</Button>
            </FormItem>
          </Form>
          
        </div>   
      </div> 
    );
  }
}
export default withAuth(AddBusinessInfo)