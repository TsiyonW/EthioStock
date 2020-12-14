import React from "react";
import {Query } from '@apollo/client/react/components'
import {SEARCH_BUSINESS} from '../../gql/query/account'
import BusinessSearched from "./ViewBusinessSearched";

 const SearchResults=()=>{
    
    return(
        <div className="watchlist-container">
            <Query query = {SEARCH_BUSINESS} variables={{search:"1"}}>
                {({loading,error,data})=>{
                    if(loading) return <div>Fetching</div>
                    if(error) return <div>Error: {console.log(error)}</div>
                    if(data.searchBusiness.length ===0){return <div>No stock to fetch</div>}
                    const businessesSearched = data.searchBusiness
                    console.log(businessesSearched)
                    return(
                        <div>
                            {businessesSearched.map(business=><BusinessSearched key = {business.id} businessResult = {business}></BusinessSearched>)}
                        
                        
                        </div>
                    )
                }
                }
            </Query> 
        </div>
    )
}


export default SearchResults;