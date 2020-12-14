import { gql } from '@apollo/client';
export const ADD_INVESTOR_INFO = gql`
mutation AddInvestor(
  $investorDrivingLicenceId:String
  $investorHouseNo:String
  $investorKebele:String!
  $investorNationality:String!
  $investorOccupation:String
  $investorPassportNumber:String
  $investorResidentId:String
  $profilePic:Upload
  $respondentDrivingLicenceId:String
  $respondentFirstName:String!
  $respondentHouseNo:String
  $respondentKebele:String
  $respondentLastName:String!
  $respondentMiddleName:String!
  $respondentOccupation:String
  $respondentPassportNumber:String
  $respondentPhoneNo:String!
  $respondentResidentId:String
  
  
){
  createInvestor(

    investorDrivingLicenceId:$investorDrivingLicenceId 
    investorHouseNo:$investorHouseNo 
    investorKebele:$investorKebele 
    investorNationality:$investorNationality
    investorOccupation:$investorOccupation
    investorPassportNumber:$investorPassportNumber
    investorResidentId:$investorResidentId 
    profilePic:$profilePic
    respondentDrivingLicenceId:$respondentDrivingLicenceId
    respondentFirstName:$respondentFirstName
    respondentHouseNo:$respondentHouseNo 
    respondentKebele:$respondentKebele 
    respondentLastName:$respondentLastName 
    respondentMiddleName:$respondentMiddleName 
    respondentOccupation:$respondentOccupation 
    respondentPassportNumber:$respondentPassportNumber 
    respondentPhoneNo:$respondentPhoneNo 
    respondentResidentId:$respondentResidentId 
    
    ){
      success
      message
      investorCreated{
        id
        account{
          id
          username
          email
        }
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

export const UPDATE_INVESTOR_INFO = gql`

mutation
  updateInvestor(
    $investorHouseNo:String
    $investorKebele:String!
    $investorNationality:String!
    $investorOccupation:String
    $investorPassportNumber:String
    $investorResidentId:String
    $profilePic:Upload
    $respondentDrivingLicenceId:String
    $respondentFirstName:String!
    $respondentHouseNo:String
    $respondentKebele:String
    $respondentLastName:String!
    $respondentMiddleName:String!
    $respondentOccupation:String
    $respondentPassportNumber:String
    $respondentPhoneNo:String!
    $respondentResidentId:String
    ){
    updateInvestor(

        investorHouseNo:$investorHouseNo 
        investorKebele:$investorKebele 
        investorNationality:$investorNationality
        investorOccupation:$investorOccupation
        investorPassportNumber:$investorPassportNumber
        investorResidentId:$investorResidentId 
        profilePic:$profilePic
        respondentDrivingLicenceId:$respondentDrivingLicenceId
        respondentFirstName:$respondentFirstName
        respondentHouseNo:$respondentHouseNo 
        respondentKebele:$respondentKebele 
        respondentLastName:$respondentLastName 
        respondentMiddleName:$respondentMiddleName 
        respondentOccupation:$respondentOccupation 
        respondentPassportNumber:$respondentPassportNumber 
        respondentPhoneNo:$respondentPhoneNo 
        respondentResidentId:$respondentResidentId 
        
        ){
        message
        success
             updatedInvestor{
                    investorKebele
            investorHouseNo
            investorOccupation
            investorResidentId
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
        account{
          id
          username
          firstName
          middleName
          lastName
        }
        
      }
    }
}

`