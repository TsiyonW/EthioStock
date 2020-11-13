import gql from 'graphql-tag'

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
query getStockById($stockId: string){
    getStockById(stockId: $stockId){
        id

    }
}
`