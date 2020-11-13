
import gql from 'graphql-tag'

export const LOGIN_MUTATION = gql`
mutation LoginMutation($email: String!, $password: String!) {
  tokenAuth(email: $email, password: $password) {
    token
    user{
      id
      userType
      firstName
      lastName
      phoneNo
      subcity
      woreda
      email
      username
    }
  }
}
`
export const CHANGE_PASSWORD = gql`
mutation ChangePassword($id:Int!, $password:String!){
  updateAccount(id:$id, password:$password){
    email
    username
    userType
  }
}
`

export const SIGNUP_BUSINESSOWNER = gql`
  mutation SignupBusinessOwner(
    $username:String!
    $password:String!
    $email:String!
    $lastName:String!
    $firstName:String!
    $phoneNo:String!
    $sex:String!
    $subcity:String!
    $woreda:Int!
    $business:String!
    $website:String!
    $category:String!
    $legality:Upload!

  ){
    createBusinessowner(
      username:$username
      password:$password
      email:$email
      subcity:$subcity
      lastName:$lastName
      firstName:$firstName
      phoneNo:$phoneNo
      sex:$sex
      woreda:$woreda
      business:$business
      website:$website
      category:$category
      legality:$legality
      
    ){
      id
      business
      category
      email
      firstName
      lastName
      phoneNo
      sex
      subcity
      userType
      username
      website
      woreda  
      userType 
      token
      success
      refreshToken
      legality
    }
  }
`

export const SIGNUP_INVESTOR = gql`
  mutation SignupInvestor(
    $nationality:String!
    $email:String!
    $firstName:String!
    $lastName:String!
    $password:String!
    $phoneNo:String!
    $sex:String!
    $subcity:String!
    $username:String!
    $woreda:Int!
    
    
  ){
    createInvestor( nationality:$nationality
      email:$email
      lastName:$lastName
      firstName:$firstName
      password:$password
      phoneNo:$phoneNo
      sex:$sex
      subcity:$subcity
      username:$username
      woreda:$woreda){
        id
        nationality
        email
        firstName
        lastName
        token
        success
        refreshToken
        phoneNo
        sex
        subcity
        userType
        username
        woreda
     
    }
  }
`