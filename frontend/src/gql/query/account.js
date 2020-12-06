import {gql} from '@apollo/client'

export const GET_USER_PROFILE = gql`
    {
        getUserProfile{
           firstName
           lastName
           phoneNo
           userType
           sex
           email
           subcity
           woreda
           dateJoined

           
            
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
export const GET_BUSINESS_ACCOUNT = gql`
{
    myBusinessAccount{
        website
        legality
        category
        businessName
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
export const GET_STOCK_BY_ID = gql`
query getStockById($stockId: Int!){
    getStockById(stockId: $stockId){
        id

    }
}
`

export const GET_BUSINESS_NOT_VERIFIED = gql`
{
businessToBeVerified{
    id
    isValidAccount
    businessName
    legality
    category
    account{
      id
      username
      email
      firstName
      lastName
      userType
        
      }
    }
}
`

export const SEARCH_BUSINESS = gql`
query searchBusiness($search:String!){
    searchBusiness(search:$search){
    id
    businessName
    category
    website
    isValidAccount
    account{
      id
      username
    }
  }
}

`

export const GET_IF_FIRST_ADMIN = gql`
    query isAdminFirst{
        isAdminFirst
    }
`

export const GET_ADMIN_BY_ID =gql`
query getAdminById($adminId:Int!){
  getAdminById(adminId:$adminId){
    account{
      id
      firstName
      middleName
      lastName
      username
      email
      woreda
      subcity
      address
    }
    profilePic
    invitedBy{
      id
      username
    }
  }
}

`

export const GET_BUSINESS_BY_ID = gql`
query getBusinessById($businessId:Int!){
  getBusinessById(businessId:$businessId){
    id
    website
    businessName
    category
    legality
    profilePic
    account{
      id
      username
      userType
      firstName
      lastName
    }
  }
}

`