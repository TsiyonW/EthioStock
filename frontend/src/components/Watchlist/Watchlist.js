import React from "react";
import Stock from '../Stock/StockInWatchlist';
import {Query } from '@apollo/client/react/components'
// import {GET_STOCK_LIST_QUERY} from '../../gql/query/stock'
import { GET_MY_WATCHLIST } from "../../gql/query/watchlist";

 const Watchlist=()=>{
    
    return(
        <div className="watchlist-container">
            <Query query = {GET_MY_WATCHLIST}>
                {({loading,error,data})=>{
                    if(loading) return <div>Fetching</div>
                    if(error) return <div>Error: {console.log(error)}</div>
                    if(!data.myWatchlist){
                        return <div>Nothing in your Watchlist</div>
                    }
                    const watchLists = data.myWatchlist
                    return(
                        <div>
                            {watchLists.map(watchlist=><Stock key = {watchlist.stock.id} stockDetail = {watchlist.stock}></Stock>)}
                        </div>
                    )
                }
                }
            </Query> 
        </div>
    )
}


export default Watchlist;