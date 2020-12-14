import React from 'react'
import withAuth from '../../routers/withAuth'
// import { useMutation} from '@apollo/client'
// import {DECLINE_BUSINESS_ACCOUNT, APPROVE_BUSINESS_ACCOUNT} from '../../gql/mutation/account'

const AdminProfile=(props)=>{
   
    return(
        <div>
            <p>ADMIN PROFILE</p>
        </div>

    )
}
export default withAuth(AdminProfile)