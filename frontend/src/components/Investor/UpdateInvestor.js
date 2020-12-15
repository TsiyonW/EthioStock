import React ,{useState} from 'react'
import {GET_INVESTOR_BY_ID} from '../../gql/query/investor'
// import { useQuery } from '@apollo/client'
import {Link} from 'react-router-dom'
import { Query } from '@apollo/client/react/components'
import withAuth from '../../routers/withAuth'
import { Form, Input, Button,Alert} from 'antd';
import { useMutation} from '@apollo/client'
import {UPDATE_INVESTOR_INFO} from '../../gql/mutation/investor'
const UpdateInvestor =(props)=>{ 
    let [errMessage, setErrorMessage] = useState('');
    let [errExists, setErrExists] = useState(false)
    
    const [updateInvestor] = useMutation(UPDATE_INVESTOR_INFO,
        {
            onCompleted(signin){
                const {  success, message } = signin.updateInvestor;
                if(!success){
                    setErrExists(errExists = true)
                    setErrorMessage(errMessage = message)
                }
                else{

                }
            }
        })
const handleClose=()=>{
setErrExists(errExists=false)
}
    const onFinish=(values)=>{
        console.log("Finishedk")
        console.log(values)
        updateInvestor({variables:{       
            // investorDrivingLicenceId :values.investorDrivingLicenceId,
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
         }})

    }
    
    return(
        <div>
            <p>Data admin</p>
            {console.log("User",props.user)}
            <Query query={GET_INVESTOR_BY_ID} variables={{investorId:props.user.pk}}>
                    {
                        ({loading,err,data})=>{
                            if(err){
                                console.log(err)
                            }
                            if(loading){
                                return(<p>(loading)</p>)
                            }
                            let investorProfile = data.getInvestorById
                            if(!data.getInvestorById){
                                return(
                                    <div>
                                        <p>Required Fields are not filled!</p>
                                        <Link to='/addinvestorinfo'>Fill form</Link>
                                    </div>
                                )
                            }
                            return(
                                <div>
                                    {errExists?<Alert
                              message="Error"
                              description={errMessage}
                              type="error"
                              showIcon
                              closable 
                              afterClose={handleClose}
                            />:<p></p>}
<Form
initialValues={
    {                                        

        investorDrivingLicenceId:investorProfile.investor.investorDrivingLicenceId  ,
        investorKebele:investorProfile.investor.investorKebele  ,
        investorHouseNo:investorProfile.investor.investorHouseNo,
        investorResidentId :investorProfile.investor.investorResidentId ,
        investorNationality:investorProfile.investor.investorNationality  ,
        investorOccupation:investorProfile.investor.investorOccupation  ,
        investorPassportNumber:investorProfile.investor.investorPassportNumber  ,
        respondentDrivingLicenceId :investorProfile.investor.respondentDrivingLicenceId ,
        respondentFirstName:investorProfile.investor.respondentFirstName  ,
        respondentHouseNo:investorProfile.investor.respondentHouseNo  ,
        respondentKebele:investorProfile.investor.respondentKebele  ,
        respondentResidentId:investorProfile.investor.respondentResidentId  ,
        respondentLastName:investorProfile.investor.respondentLastName  ,
        respondentMiddleName:investorProfile.investor.respondentMiddleName  ,
        respondentOccupation:investorProfile.investor.respondentOccupation  ,
        respondentPassportNumber:investorProfile.investor.respondentPassportNumber  ,
        respondentPhoneNo:  investorProfile.investor.respondentPhoneNo,
       
    }
}


ref={props.formRef} name="add_investor_info" onFinish={onFinish}>
           {/* get from user context */}
            {/* <p>Investor firstname</p>
            <p>Investor middle name</p>
            <p>Investor lastname</p>
            <p>Investor woreda</p>
            <p>Investor subcity</p>
            <p>Investor address</p> */}
          
            <Form.Item name="investorKebele"  label="Kebele" 
                      rules={[{required: true, message: 'Please input your Kebele!',}, ]}
                    >
              <Input />
            </Form.Item>  

            <Form.Item name="investorHouseNo"  label="House Number" 
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

            <Form.Item name="profilePic"   label="Profile Picture" extra="Upload Profile Picture">
            <Input type="file" className="mb2" onChange={e=>this.setState({profilePic:e.target.files[0]})}/>
          </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" >Save</Button>
            </Form.Item>            
            
            {/* <FormItem>
              <Button type="primary"  onClick={this.onSkip}>Skip</Button>
            </FormItem> */}







          </Form>















                                </div>
                            )
                        }
                    }

                </Query>
                 

        </div>
    )
}
export default withAuth(UpdateInvestor)