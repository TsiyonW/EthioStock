import { gql } from '@apollo/client';

export const ADD_TO_WATCHLIST = gql`
mutation AddToWatchlist($stockId: Int!) {
    addWatchlist(stockId: $stockId) {
        message
        success
        watchlistAdded{
            id
            account{
                id
                email
                username
                userType
            }
            stock{
                id
                price
                owner{
                    id
                }
                closingDate
            }
        }
    
    }
}
`

export const REMOVE_FROM_WATCHLIST = gql`
mutation RemoveWatchlist($stockId:Int!){
    removeWatchlist(stockId:$stockId){
      success
      message
    }
  }

`