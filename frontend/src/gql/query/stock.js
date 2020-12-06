import {gql} from '@apollo/client'

export const GET_STOCK_LIST_QUERY = gql`
    {
        allStock{
            id,
            price,
            closingDate,
            openingDate,
            description,
            noOfStock,
            approved,
            closed,
            sells,
            buys,
            owner{
                id
            }
        }
    }
`
export const GET_STOCK_BY_ID = gql`
query getStockById($stockId: String!){
    getStockById(stockId: $stockId){
        id

    }
}
`

export const SEARCH_STOCK = gql`
query searchStock($search:String!){
    searchStock(search:$search){
        id
        price
        openingDate
        closingDate
        createdAt
        owner{
          id
          business
          account{
            username
          }
        }
      }
}
`