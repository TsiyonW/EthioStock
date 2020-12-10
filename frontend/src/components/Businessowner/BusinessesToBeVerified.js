import React from 'react'
import withAuth from '../../routers/withAuth'
import { useQuery} from '@apollo/client'
import {GET_BUSINESS_NOT_VERIFIED} from '../../gql/query/account'
import BusinessToBeVerified from './BusinessToBeVerified'

function BusinessesToBeVerified(props){
    
    const {loading:loading_businessaccount,err:load_err, data:data_businessaccounts} =useQuery(GET_BUSINESS_NOT_VERIFIED)
    

        const userProfile = props.user
        // if user not admin dont display page
        if(userProfile.userType !== "Admin"){

            this.props.history.push('/homepage')

        }
        if(loading_businessaccount){
            return(<p>(loading)</p>)
        }
        if(load_err){
            //
        }
        return(
            <div>
                
                {data_businessaccounts.businessToBeVerified.length>0? 
                data_businessaccounts.businessToBeVerified.map((businessaccount)=>{
                    return(<BusinessToBeVerified  key={businessaccount.id} businessAccount = {businessaccount}/>)
                }):<p>No business accounts to be verified</p>}
            </div>
        )
    }


export default withAuth(BusinessesToBeVerified);