import React, { useState } from 'react'
import withAuth from '../../routers/withAuth'
import { useMutation} from '@apollo/client'
import {SEND_WARNING_EMAIL} from '../../gql/mutation/report'
import { GET_REPORT_COUNT } from '../../gql/query/report'
import {Modal, Form, Input, Button} from 'antd'
import { Query } from '@apollo/client/react/components'

function ReportToBeResolved(props){
    let [modalVisible, setModalVisible] = useState(false)
   let[errorMessage, setErrorMessage] = useState(false)
   let[successMessage, setSuccessMessage] = useState(false)
    const userReport = props.userReport
    const userId = userReport.reportedUser.id;
    const userEmail = userReport.reportedUser.email;
    const [sendWarningEmail] = useMutation(SEND_WARNING_EMAIL,
        {
            onCompleted(sendWarning){
                const {success, message} = sendWarning.sendWarningEmail;
                if(!success){
                    console.log(message)
                    setModalVisible(modalVisible=false)
                    setErrorMessage(errorMessage = message)
                }
                if(success){
                    console.log(message)
                    setModalVisible(modalVisible=false)
                    setSuccessMessage(successMessage = message)
  
                }
            }
        }
        
        )
 

  const showModal = () => {
            setModalVisible(modalVisible=true,);
          };
        
        const hideModal = () =>{
            setModalVisible(modalVisible=false,);      
          }

          const onFinish=(values)=>{
            console.log("here",values)
            sendWarningEmail({variables:{
                sendTo:userEmail,
                message:values.message,
                subject:"EthioStock Warning: User reported multiple times "}})

          }
          const [form] = Form.useForm();
        return(
            <div>
                {successMessage?<p>{successMessage}</p>:<p></p>}
                {errorMessage?<p>{errorMessage}</p>:<p></p>}
                
                <Modal
                    title="Title"
                    visible={modalVisible}
                    footer={[
                        <Button key = "cancel" onClick={hideModal}>Return</Button>,
                        <Button key="sendEmail" onClick={form.submit}>Send Email</Button>
                    ]}
                >
                   <Form form={form} onFinish={onFinish}>
                        <Form.Item value="EthioStock Warning: User reported multiple times "
                             name = "subject" label="subject">
                            <Input 
                            placeholder="EthioStock Warning: User reported multiple times "
                            
                            readOnly />
                        </Form.Item>

                        <Form.Item  value={userReport.reportedUser.email} 
                              name = "sendTo" label="E-mail">
                            <Input placeholder={userReport.reportedUser.email} readOnly/>
                        </Form.Item>

                        <Form.Item name="message" label="message">
                            <Input placeholder ="Message" rows={4}></Input>
                        </Form.Item>
                   </Form>

                </Modal>
               { console.log(userReport )
               }
               
                <p>{userReport.id}</p>
                <p>{userReport.reason}</p>
                <p>{userReport.reportDate}</p>
                <p>{userReport.reportedBy.id}</p>
                <p>{userReport.reportedBy.username}</p>
                <p>{userReport.reportedBy.firstName}</p>
                <p>{userReport.reportedBy.middleName}</p>
                <p>{userReport.reportedBy.email}</p>
                <p>{userReport.reportedUser.id}</p>
                <p>{userReport.reportedUser.username}</p>
                <p>{userReport.reportedUser.firstName}</p>
                <p>{userReport.reportedUser.middleName}</p>
                <p>{userReport.reportedUser.email}</p>
                <Query query={GET_REPORT_COUNT} variables={{userId}}>
                    {
                        ({loading,err,data})=>{
                            if(err){
                                console.log(err)
                            }
                            if(loading){
                                return(<p>(loading)</p>)
                            }
                            let reportCount = data.getReportCount.count
                            return(
                                <div>
                                    {reportCount>0?<button onClick={showModal}>Send Warning Email</button>:<span></span>}
               
                                </div>
                            )
                        }
                    }

                </Query>
                 
                
               </div>
        )
    }


export default withAuth(ReportToBeResolved);