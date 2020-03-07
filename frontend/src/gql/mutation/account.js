
import gql from 'graphql-tag'

export const LOGIN_MUTATION = gql`
mutation LoginMutation($email: String!, $password: String!) {
  tokenAuth(email: $email, password: $password) {
    token
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
    $woreda:String!
    $business:String!
    $website:String!
    $category:String!
    $legality:String!

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
      
    ){
      username
      email
      subcity
      lastName
      firstName
      phoneNo
      sex
      woreda
    }
  }
`

// export const SIGNUP_INVESTOR = gql`
//   mutation SignupInvestor(){
//     createInvestor(){
      
//     }
//   }
// `