
import gql from 'graphql-tag'

export const CREATE_STOCK_MUTATION = gql`
mutation CreateStock(
    $buys: String!, 
    $sells: String!, 
    $closingDate:DateTime!, 
    $description:String!
    $noOfStock:Int!, 
    $openingDate:DateTime!,
    $price:Decimal!,
    $sells:Int!
    
    ) {
  createStock(
      buys: $buys
      sells: $sells
      closingDate: $closingDate
      description: $description
      noOfStock: $noOfStock
      openingDate: $openingDate
      price: $price
      sells: $sells
  ) {
      buys
      sells
      closingDate
      description
      noOfStock
      openingDate
      price
      sells
        owner{
            business
            account{
                email
                username
                userType
            }
    }
    
  }
}
`

export const SELL_STOCK =gql`
    mutation UpdateStock($id:Int!, $sells:Int!){
        updateStock(id:$id, sells:$sells){
            sells
            owner{
                business
                account{
                    email
                }
                
            }
        }
    }
`
export const APPROVE_STOCK = gql`
    mutation UpdateStock($id:Int!, $approved:Boolean!){
        updateStock(id:$id, approved:$approved){
            approved
            owner{
                business
                account{
                    email
                }
            }
        }
    }
`
export const UPDATE_STOCK = gql`
    mutation UpdateStock($id:Int!, closingDate:DateTime, openingDate:DateTime){
        updateStock(id:$id){
            id
            closingDate
            openingDate
            owner{
                business
                account{
                    email
                }
            }
        }
    }

`