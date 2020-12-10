import { gql } from '@apollo/client';
export const REPORT_USER = gql`
mutation ReportUser($reason:String!,$reportedUserId:Int!){
  reportUser(reason:$reason, reportedUserId:$reportedUserId){
    success
    message
    userReport{
      id
			reason
      reportedBy{
        id
        email
        firstName
        lastName
        
      }
      reportedUser{
        id
        firstName
        lastName
        email
      }
    }
  }
}

`

export const SEND_WARNING_EMAIL = gql`
mutation($message:String!, $sendTo:String!, $subject:String!){
  sendWarningEmail(
      message:$message,
      sendTo:$sendTo,
      subject:$subject
  ){
    success
    message
  }
} `