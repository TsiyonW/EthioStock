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
        business
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
query getStockById($stockId: string){
    getStockById(stockId: $stockId){
        id

    }
}
`