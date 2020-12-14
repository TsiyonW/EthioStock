import { gql } from '@apollo/client';
export const LOGIN_MUTATION = gql`
mutation LoginMutation($email: String!, $password: String!) {
  tokenAuth(email: $email, password: $password) {
    token
    success
    errors
    user{
      id
      pk
      userType
      firstName
      middleName
      lastName
      sex
      phoneNo
      subcity
      woreda
      email
      username
      accountLinked
    }
  }
}
`

export const ADD_BUSINESSOWNER_INFO = gql`
  mutation SignupBusinessOwner(
    $businessName:String!
    $website:String
    $category:String!
    $legality:Upload
    $profilePic:Upload

  ){
    createBusinessowner(
      businessName:$businessName
      website:$website
      category:$category
      legality:$legality
      profilePic:$profilePic
      
    ){
      id
      businessName
      category
      website
      isValidAccount
      success
      message
    }
  }
`

export const APPROVE_BUSINESS_ACCOUNT = gql`
mutation approveBusinessAccount($businessId:Int!){
  approveBusinessAccount(businessId:$businessId){
    updatedBusiness{
      id
      isValidAccount
      account{id
      username
      }
    }
  }
}

`

export const DECLINE_BUSINESS_ACCOUNT = gql`
mutation declineBusinessAccount($businessId:Int!){
  declineBusinessAccount(businessId:$businessId){
    updatedBusiness{
      id
      isValidAccount
      account{id
      username
      }
    }
  }
}

`



export const REGISTER_USER = gql`
  mutation RegisterUser(
    $firstName:String!
    $middleName:String!
    $lastName:String!
    $sex:String!
    $email:String!
    $username:String!
    $userType:String!
    $phoneNo:String!
    $subcity:String!
    $woreda:Int!
    $address:String!
    $password1:String!
    $password2:String!

  ){
    register(
      firstName:$firstName
      middleName:$middleName
      lastName:$lastName
      sex:$sex
      email:$email
      username:$username
      userType:$userType
      phoneNo:$phoneNo
      subcity:$subcity
      woreda:$woreda
      address:$address
      password1:$password1
      password2:$password2
      
    ){
      success
      errors
    }
  }
`

export const VERIFY_ACCOUNT = gql`
mutation verifyAccount($token:String!){
  verifyAccount(token:$token) {
    success,
    errors
  }
}

`


export const FORGET_PASSWORD = gql`
mutation forgetPassword($email:String!){
  sendPasswordResetEmail(email:$email){
    success
    errors
  }
}`

export const RESET_PASSWORD = gql`

mutation ResetPassword($token:String!, $newPassword1:String!, $newPassword2:String!){
  passwordReset(
    token: $token,
    newPassword1: $newPassword1,
    newPassword2: $newPassword2
  ) {
    success,
    errors
  }
}
`

export const CHANGE_PASSWORD = gql`
mutation ChangePassword($oldPassword:String!, $newPassword1:String!, $newPassword2:String!){
  passwordChange(
    oldPassword:$oldPassword
    newPassword1: $newPassword1,
    newPassword2: $newPassword2  ) {
    token
    success,
    errors
  }
}

`

export const VERIFY_ADMIN_ACCOUNT = gql`
 mutation($accountId:Int!){
   createAdmin(accountId:$accountId){
     success
     message
     invitedBy{
       id
       email
       userType
       username
       firstName
       lastName
     }
     account{
       id
       email
       userType
       username
       firstName
       lastName
     }
  }
}

`

export const UPDATE_PROFILE = gql`


mutation updateAccount($firstName:String, $lastName:String){
   updateAccount(firstName:$firstName
   lastName:$lastName
  ){
     errors
     success
     
  }
}
  
`

export const CREATE_ADMIN = gql`

mutation createAdmin($accountId:Int!){
  createAdmin(accountId:$accountId){
    invitedBy{
      id
    }
    account{
      id
      firstName
      middleName
      lastName
      userType
      phoneNo
      address
      email
      dateJoined
    }
  }
}


`
