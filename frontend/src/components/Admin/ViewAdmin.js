import React from 'react'
import {GET_ADMIN_BY_ID} from '../../gql/query/account'
import { useParams } from 'react-router-dom'
// import { useQuery } from '@apollo/client'
import { Query } from '@apollo/client/react/components'

const ViewAdmin =()=>{
    const { id } = useParams();
    // const {loading:loading_admin,err:load_err, data:data_admin} =useQuery(GET_ADMIN_BY_ID,
    //     {variables:{ adminId:id }}
    //     )
    // console.log("here",data_admin)
    // if(!data_admin.getAdminById){
    //     return(
    //         <div>User Account not found!</div>
    //     )
    // }
    // else{
    //     let adminProfile = data_admin.getAdminById
    
    // }
    
    return(
        <div>
            <p>Data admin</p>
            <Query query={GET_ADMIN_BY_ID} variables={{adminId:id}}>
                    {
                        ({loading,err,data})=>{
                            if(err){
                                console.log(err)
                            }
                            if(loading){
                                return(<p>(loading)</p>)
                            }
                            let adminProfile = data.getAdminById
                            if(!data.getAdminById){
                                return(
                                    <div>
                                        <p>User Not Found!</p>
                                    </div>
                                )
                            }
                            return(
                                <div>
                                    <h2>Admin</h2>
                                    <p>Id: {adminProfile.account.id}</p>
                                    <p>E-mail: {adminProfile.account.email}</p>
                                    <p>First Name: {adminProfile.account.firstName}</p>
                                    <p>Middle Name: {adminProfile.account.middleName}</p>
                                    <p>Username: {adminProfile.account.username}</p>
                                    <p>Address: {adminProfile.account.address}</p>
                                    <p>Subcity: {adminProfile.account.subcity}</p>
                                    <p>Woreda: {adminProfile.account.woreda}</p>
                                    <h2>Added by</h2>
                                    <p>Id: {adminProfile.invitedBy.id}</p>
                                    <p>Username: {adminProfile.invitedBy.username}</p>
                                </div>
                            )
                        }
                    }

                </Query>
                 

        </div>
    )
}
export default ViewAdmin