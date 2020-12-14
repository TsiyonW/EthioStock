import { gql } from '@apollo/client';
export const GET_INVESTOR_BY_ID =   gql`

query getInvestorById($investorId:Int!){
  getInvestorById(investorId:$investorId){
      id
      username
      email
      firstName
      lastName
      middleName
      userType
      woreda
      sex
      subcity
      phoneNo
      investor{
          id
          investorKebele
          investorHouseNo
          investorOccupation 
          investorResidentId 
          investorDrivingLicenceId
          investorPassportNumber 
          investorNationality
          respondentFirstName
          respondentMiddleName 
          respondentLastName 
          respondentKebele
          respondentHouseNo 
          respondentOccupation 
          respondentPhoneNo
          respondentResidentId 
          respondentDrivingLicenceId 
          respondentPassportNumber 
          profilePic
      }

    
  }
}


`



export const GET_INVESTOR_ACCOUNT = gql`
{
    myInvestorAccount{
        nationality
        account{
            firstName
            lastName
            phoneNo
            userType
            sex
            email
            subcity
            woreda

        }
        
   }
}
`