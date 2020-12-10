import {gql} from '@apollo/client'


export const GET_USER_REPORTS = gql`
{ 
    
       getAllReports{
         id
             reason
             reportDate
             reportedBy{
               id
               username
               firstName
               middleName
               email
             }
             reportedUser{
               id
               username
               firstName
               middleName
               email
             }
           }


}`

export const GET_REPORT_COUNT = gql`

  query getReportCount($userId:Int!){
      getReportCount(userId:$userId){
        count
      }
    }

  
`