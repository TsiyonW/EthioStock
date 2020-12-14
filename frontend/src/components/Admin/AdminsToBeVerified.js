import React from 'react'
import withAuth from '../../routers/withAuth'
import { useQuery} from '@apollo/client'
import {GET_ADMIN_NOT_VERIFIED} from '../../gql/query/account'
import AdminToBeVerified from './AdminToBeVerified'

function AdminsToBeVerified(props){
    
    const {loading:loading_adminaccount,err:load_err, data:data_adminaccounts} =useQuery(GET_ADMIN_NOT_VERIFIED)
    

        const userProfile = props.user
        // if user not admin dont display page
        if(userProfile.userType !== "Admin"){

            this.props.history.push('/homepage')

        }
        if(loading_adminaccount){
            return(<p>(loading)</p>)
        }
        if(load_err){
            //
        }
        return(
            <div>
                <h1>Admins to be verified</h1>
                {data_adminaccounts.getAdminsNotVerified.length>0? 
                data_adminaccounts.getAdminsNotVerified.map((adminaccount)=>{
                    console.log(adminaccount)
                    return(<AdminToBeVerified  key={adminaccount.id} adminAccount = {adminaccount}/>)
                }):<p>No admin accounts to be verified</p>}
            </div>
        )
    }


export default withAuth(AdminsToBeVerified);