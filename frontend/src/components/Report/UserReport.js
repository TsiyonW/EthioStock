import React from 'react'

import { useMutation, useQuery} from '@apollo/client'
import {DECLINE_BUSINESS_ACCOUNT, APPROVE_BUSINESS_ACCOUNT} from '../../gql/query/'
import withAuth from '../../Auth'


function UserReport(props){
    
    const {loading:loading_userReport, err, data:data_userReport} = useQuery(APPROVE_BUSINESS_ACCOUNT)
    const [declineBusiness, {data:data_dec}] = useMutation(DECLINE_BUSINESS_ACCOUNT) 

       const businessAccount = props.businessAccount

        return(
            <div>
                {console.log(businessAccount.id)}
                <p>{businessAccount.account.email}</p>
                <p>{businessAccount.account.id}</p>
                <p>{businessAccount.account.firstName}</p>
                <p>{businessAccount.account.lastName}</p>
                <p>{businessAccount.account.username}</p>
                <p>{businessAccount.account.userType}</p>
                <p>{businessAccount.business}</p>
                <p>{businessAccount.category}</p>
                <p>{businessAccount.legality}</p>
                <p>{businessAccount.isValidAccount}</p>
                <button onClick={()=>{ approveBusiness({variables:{businessId:businessAccount.id}}); console.log(data_app)}}>Approve</button>
                <button onClick={()=>{declineBusiness({variables:{businessId:businessAccount.id}}); console.log(data_dec)}}>Deny</button>
            </div>
        )
    }


export default withAuth(UserReport);