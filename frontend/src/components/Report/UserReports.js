import React from 'react'
import withAuth from '../routers/withAuth'
import { useQuery} from '@apollo/client'
import {GET_BUSINESS_NOT_VERIFIED} from '../gql/query/account'
import UserReport from './UserReport'

function UserReports(props){
    
    const {loading:loading_businessaccount,err:load_err, data:data_businessaccounts} =useQuery(GET_BUSINESS_NOT_VERIFIED)

        const userProfile = props.user
        // if user not admin dont display page
        if(userProfile.userType === "Investor"){

            this.props.history.push('/investorhomepage')

        }
        if(userProfile.userType !== "Businessowner"){

            this.props.history.push('/businesshomepage')

        }        
        if(loading_businessaccount){
            return(<p>(loading)</p>)
        }
        if(load_err){
            console.log(load_err)
        }
        console.log(data_businessaccounts)
        return(
            <div>
                
                {data_businessaccounts.businessToBeVerified.length>0? 
                data_businessaccounts.businessToBeVerified.map((businessaccount)=>{
                    return(<UserReport  key={businessaccount.id} businessAccount = {businessaccount}/>)
                }):<p>No business accounts to be verified</p>}
            </div>
        )
    }


export default withAuth(UserReports);