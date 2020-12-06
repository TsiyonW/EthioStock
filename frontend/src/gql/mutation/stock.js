
import {gql} from '@apollo/client'

export const CREATE_STOCK_MUTATION = gql`
mutation CreateStock(
    $closingDate:DateTime!, 
    $description:String!
    $noOfStock:Int!, 
    $openingDate:DateTime!,
    $price:Decimal!,
    $minAmountOfStockToBuy:Int!
    $serviceChargePercentage:Int!
    
    ) {
  createStock(
      closingDate: $closingDate
      description: $description
      noOfStock: $noOfStock
      openingDate: $openingDate
      price: $price
      minAmountOfStockToBuy:$minAmountOfStockToBuy
      serviceChargePercentage:$serviceChargePercentage
  ) {
      id
      buys
      sells
      closingDate
      description
      noOfStock
      openingDate
      price
      minAmountOfStockToBuy
      sells
      success
      message
        owner{
            id
            businessName
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
    mutation UpdateStock($id:Int!, $closingDate:DateTime, $openingDate:DateTime){
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