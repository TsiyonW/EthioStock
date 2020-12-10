import React ,{Component} from 'react';
import { Form, Input,Modal, Button,} from 'antd';
import { Redirect } from "react-router-dom";
import { Mutation } from "@apollo/client/react/components";
import { ADD_INVESTOR_INFO } from '../../gql/mutation/account'
import 'antd/dist/antd.css';
import '../../styles/styles.scss';
import Header from './Header'
import auth from '../../Auth'

import SideBar from "./Sidebar";
import withAuth from "../../routers/withAuth";
import store from '../../store'
// import auth from "../Auth";
const FormItem = Form.Item;
// const Option = Select.Option;
// const RadioGroup = Radio.Group;

class AddInvestorInfo extends Component{
  state = {
    investorDrivingLicenceId :'',
    investorKebele :'',
    investorHouseNo :'',
    investorResidentId :'',
    investorNationality :'',
    investorOccupation :'',
    respondentHouseNo :'',
    investorPassportNumber :'',
    respondentDrivingLicenceId :'',
    respondentFirstName :'',
    respondentKebele :'',
    respondentResidentId :'',
    respondentLastName :'',
    respondentMiddleName :'',
    respondentOccupation :'',
    respondentPassportNumber :'',
    respondentPhoneNo :'',
    profilePic :null,
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
  handleLogout=(e)=>{
    auth.logOut()
    return(<Redirect to="/login" />)
}
displaySideBar=()=>{
    document.getElementById("sidebar-container-s").style.display = "block";
}
closeSideBar=()=>{
    document.getElementById("sidebar-container-s").style.display = "none";
}
  getMutationResponse = (data)=>{
    const { message , success} = data.createInvestor;
    console.log(data)
    this.hideModal()
    this.setState({registerSuccess:success})
    this.setState({resultMessage:message})
  }
  // onSkip =()=>{

  // }
  onFinish = (values) => {
    console.log("values recieved", values)
    this.setState({
      investorDrivingLicenceId :values.investorDrivingLicenceId,
      investorKebele :values.investorKebele,
      investorResidentId :values.investorResidentId,
      investorHouseNo: values.investorHouseNo,
      investorNationality :values.investorNationality,
      investorOccupation :values.investorOccupation,
      investorPassportNumber :values.investorPassportNumber,
      respondentDrivingLicenceId :values.respondentDrivingLicenceId,
      respondentFirstName :values.respondentFirstName,
      respondentHouseNo :values.respondentHouseNo,
      respondentKebele :values.respondentKebele,
      respondentResidentId :values.respondentResidentId,
      respondentLastName :values.respondentLastName,
      respondentMiddleName :values.respondentMiddleName,
      respondentOccupation :values.respondentOccupation,
      respondentPassportNumber :values.respondentPassportNumber,
      respondentPhoneNo :values.respondentPhoneNo,
      profilePic:values.profilePic,
      modalVisible: true,
      
      
    })

    };
  

  render(){
    const { 
      investorDrivingLicenceId  ,
      investorKebele  ,
      investorHouseNo,
      investorResidentId  ,
      investorNationality  ,
      investorOccupation  ,
      investorPassportNumber  ,
      respondentDrivingLicenceId  ,
      respondentFirstName  ,
      respondentHouseNo  ,
      respondentKebele  ,
      respondentResidentId  ,
      respondentLastName  ,
      respondentMiddleName  ,
      respondentOccupation  ,
      respondentPassportNumber  ,
      respondentPhoneNo  ,
      profilePic ,
      resultMessage,

     } = this.state;
     const {users} = store.getState()
     if(users.user.accountLinked | this.state.registerSuccess){
      return(
        <Redirect to='/investorHomepage'/>
      )
    }
    const userProfile = this.props.user
   
    return(
      
      <div className = "signup-container ">
          <Header handleLogout = {this.handleLogout} userType={userProfile.userType} headerButtons={false}  displaySideBar = {this.displaySideBar}/>
          <SideBar closeSideBar= {this.closeSideBar}/>
                
<Modal
title="User Registration"
visible={this.state.modalVisible}
footer={
  [
    <Button key="addBusinessCancel" onClick={this.hideModal}>Cancel</Button>,
    <Mutation
      key="addInvestorMutation"
      mutation={ADD_INVESTOR_INFO}
      variables={{
        investorDrivingLicenceId  ,
        investorKebele  ,
        investorHouseNo,
        investorResidentId  ,
        investorNationality  ,
        investorOccupation  ,
        investorPassportNumber  ,
        respondentDrivingLicenceId  ,
        respondentFirstName  ,
        respondentHouseNo  ,
        respondentKebele  ,
        respondentResidentId  ,
        respondentLastName  ,
        respondentMiddleName  ,
        respondentOccupation  ,
        respondentPassportNumber  ,
        respondentPhoneNo  ,
        profilePic 
      }}
      onCompleted={data=>this.getMutationResponse(data)}
    >
      {
        (mutation, {loading,error})=>(
          <span>
            <Button key="addinvestorSubmit" onClick={mutation}>Submit</Button>
          </span>
        )
      }
    </Mutation>
  ]
}
> 
    <h2>Investor Info</h2>
    <p>{investorDrivingLicenceId?<p>Driving Licence Id: {investorDrivingLicenceId}</p>:""}</p>
    <p>{investorKebele?<p>Kebele: {investorKebele}</p>:""}</p>
    <p>{investorHouseNo?<p>House Number: {investorHouseNo}</p>:""}</p>
    <p>{investorResidentId?<p>Residence ID: {investorResidentId}</p>:""}</p>
    <p>{investorNationality?<p>Nationality: {investorNationality}</p>:""}</p>
    <p>{investorOccupation?<p>Occupation: {investorOccupation}</p>:""}</p>
    <p>{investorPassportNumber?<p>Passport Number: {investorPassportNumber}</p>:""}</p>
    <p>{profilePic?<p>Profile Picture: {profilePic}</p>:""}</p>
    <h2>Respondent or Representative Info</h2>
    <p>{respondentDrivingLicenceId?<p>Driving Licence Id: {respondentDrivingLicenceId}</p>:""}</p>
    <p>{respondentFirstName?<p>First Name: {respondentFirstName} </p>:""}</p>
    <p>{respondentHouseNo?<p>House Number: {respondentHouseNo}</p>:""}</p>
    <p>{respondentKebele?<p>Kebele: {respondentKebele}</p>:""}</p>
    <p>{respondentResidentId?<p> Residence ID: {respondentResidentId}</p>:""}</p>
    <p>{respondentLastName?<p>Last Name: {respondentLastName}</p>:""}</p>
    <p>{respondentMiddleName?<p>Middle Name: {respondentMiddleName}</p>:""}</p>
    <p>{respondentOccupation?<p>Occupation: {respondentOccupation}</p>:""}</p>
    <p>{respondentPassportNumber?<p>Passport Number: {respondentPassportNumber}</p>:""}</p>
    <p>{respondentPhoneNo?<p>Phone Number: {respondentPhoneNo}</p>:""}</p>



</Modal>
        <div className = "signup-content">               
          <h1>Investor Info</h1>
          <p  className="authentication-error">{resultMessage}</p>
                
          <Form  ref={this.formRef} name="add_investor_info" onFinish={this.onFinish}>
           {/* get from user context */}
            {/* <p>Investor firstname</p>
            <p>Investor middle name</p>
            <p>Investor lastname</p>
            <p>Investor woreda</p>
            <p>Investor subcity</p>
            <p>Investor address</p> */}
          
            <Form.Item  name="investorKebele"  label="Kebele" 
                      rules={[{required: true, message: 'Please input your Kebele!',}, ]}
                    >
              <Input />
            </Form.Item>  

            <Form.Item  name="investorHouseNo"  label="House Number" 
                      rules={[{max:5, message: 'House number shouldn\'t be more than 5 characters!',}, ]}
                    >
              <Input />
            </Form.Item> 

            <Form.Item  name="investorOccupation"  label="Occupation" 
                      rules={[{max:25, message: 'Occupation shouldn\'t be more than 25 characters!',}, ]}
                    >
              <Input />
            </Form.Item> 

            <Form.Item  name="investorResidentId"  label="Resident ID number" 
                      rules={[{max:25, message: 'Kebele ID number shouldn\'t be more than 10 characters!',}
                    ]}
                    >
              <Input />
              {/* <span>OR</span> */}
            </Form.Item> 
            <Form.Item  name="investorDrivingLicenceId"  label="Driving Licence ID" 
                      rules={[{max:25, message: 'Driving Licence shouldn\'t be more than 25 characters!',}, ]}
                    >
              <Input />
            </Form.Item> 
            <Form.Item  name="investorPassportNumber"  label="Passport Number" 
                      rules={[{max:10, message: 'Passport Number shouldn\'t be more than =10 characters!',}, ]}
                    >
              <Input />
              
            {/* <span>OR</span> */}
            </Form.Item>
            <Form.Item  name="investorNationality"  label="Nationality" 
                      rules={[{required: true, message: 'Please input Nationality!',},
                        
                        {max:20, message: 'Nationality shouldn\'t be more than 20 characters!',}, ]}
                    >
              <Input />
            </Form.Item>
                  {/* <h2>RESPONDENT OR REPRESENTATIVE INFO:</h2> */}
            <Form.Item  name="respondentFirstName"  label="First Name" 
                      rules={[{required: true, message: 'Please input respondent or representative firstname!',},
                        {max:25, message: 'First Name shouldn\'t be more than 25 characters!',}, ]}
                    >
              <Input />
            </Form.Item>
            <Form.Item  name="respondentMiddleName"  label="Middle Name" 
                      rules={[{required: true, message: 'Please input respondent or representative middlename!',},
                      {max:25, message: 'Middle Name shouldn\'t be more than 25 characters!',}, ]}
                    >
              <Input />
            </Form.Item>

            <Form.Item  name="respondentLastName"  label="Last Name" 
                      rules={[{required: true, message: 'Please input respondent or representative lastname!',},
                      {max:25, message: 'Last Name shouldn\'t be more than 25 characters!',}, ]}
                    >
              <Input />
                  </Form.Item>
            <Form.Item  name="respondentPhoneNo"  label="Phone Number" 
                      rules={[
                        {required: true, message: 'Please input respondent or representative phone number!',},
                        {max:9, message: 'Please input phone number!',}, 
                        {min:9, message: 'Please input phone number',}, 
                    
                    ]}
                    >
              <Input type="number" />
            </Form.Item>
                

            <Form.Item  name="respondentKebele"  label="Kebele" 
                      rules={[{required: true, message: 'Please input respondent or representative\' Kebele!',},
                      {max:6, message: 'Kebele shouldn\'t be more than 6 characters!',}, ]}
                    >
              <Input />
            </Form.Item>  

            <Form.Item  name="respondentHouseNo"  label="House Number" 
                      rules={[{max:5, message: 'House number shouldn\'t be more than 5 characters!',}, ]}
                    >
              <Input />
            </Form.Item> 
                  
            <Form.Item  name="respondentOccupation"  label="Occupation" 
                      rules={[{max:25, message: 'Occupation shouldn\'t be more than 25 characters!',}, ]}
                    >
              <Input />
                  </Form.Item> 

            <Form.Item  name="respondentResidentId"  label="Resident ID number" 
                      rules={[{max:25, message: 'Kebele ID number shouldn\'t be more than 10 characters!',}
                    ]}
                    >
              <Input />
              {/* <span>OR</span> */}
            </Form.Item> 
            <Form.Item  name="respondentDrivingLicenceId"  label="Driving Licence ID" 
                      rules={[{max:25, message: 'Driving Licence shouldn\'t be more than 25 characters!',}, ]}
                    >
              <Input />
            </Form.Item> 
            {/* <span>OR</span> */}
            <Form.Item  name="respondentPassportNumber"  label="Passport Number" 
                      rules={[{max:10, message: 'Passport Number shouldn\'t be more than =10 characters!',}, ]}
                    >
              <Input />
            </Form.Item> 

            <FormItem name="profilePic"   label="Profile Picture" extra="Upload Profile Picture">
            <Input type="file" className="mb2" onChange={e=>this.setState({profilePic:e.target.files[0]})}/>
          </FormItem>

            <FormItem>
              <Button type="primary" htmlType="submit" >Save</Button>
            </FormItem>            
            
            {/* <FormItem>
              <Button type="primary"  onClick={this.onSkip}>Skip</Button>
            </FormItem> */}







          </Form>

        </div>      
      </div> 
    );
  }
}

export default withAuth(AddInvestorInfo)