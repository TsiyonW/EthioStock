import {gql} from '@apollo/client'

export const GET_MY_WATCHLIST = gql`
{
    myWatchlist{
        id
        
        stock{
          id
          openingDate
          closed
          closingDate
          noOfStock
          minAmountOfStockToBuy
          buys
          price
          approved
          sells
          serviceChargePercentage
          owner{
            id
            username
            email
            firstName
            middleName
            
          }
        }
      }
}
`