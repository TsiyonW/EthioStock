import React from "react";
import Stock from './Stock';
import {Query } from '@apollo/client/react/components'
import {GET_STOCK_LIST_QUERY} from '../../gql/query/stock'

 const ViewStock=()=>{
    
    return(
        <div className="watchlist-container">
            <Query query = {GET_STOCK_LIST_QUERY}>
                {({loading,error,data})=>{
                    if(loading) return <div>Fetching</div>
                    if(error) return <div>Error: {console.log(error)}</div>
                    if(!data.allStock){return <div>No stock to fetch</div>}
                    const allStocks = data.allStock
                    return(
                        <div>
                            {allStocks.map(stock=><Stock key = {stock.id} stockDetail = {stock}></Stock>)}
                        </div>
                    )
                }
                }
            </Query> 
        </div>
    )
}


export default ViewStock;