import React from 'react'
import withAuth from '../../routers/withAuth'
import { useMutation} from '@apollo/client'
import { CREATE_ADMIN } from '../../gql/mutation/account'

function AdminToBeVerified(props){

    const adminAccount = props.adminAccount
    const [approveAdmin] = useMutation(CREATE_ADMIN)
    
    const userProfile = props.user
    if(userProfile.userType !== "Admin"){

        this.props.history.push('/homepage')

    }
        return(
            <div>
                <p>E-mail: {adminAccount.email}</p>
                <p>User ID: {adminAccount.id}</p>
                <p>First Name: {adminAccount.firstName}</p>
                <p>Last Name: {adminAccount.lastName}</p>
                <p>Username: {adminAccount.username}</p>
                <p>Usertype: {adminAccount.userType}</p>
                <p>Username: {adminAccount.address}</p>
                <p>Usertype: {adminAccount.dateJoined}</p>
                <button onClick={()=>{ approveAdmin({variables:{accountId:adminAccount.id}}); }}>Approve</button>
            </div>
        )
    }


export default withAuth(AdminToBeVerified);