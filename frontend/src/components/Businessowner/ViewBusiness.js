import React from 'react'
import {GET_BUSINESS_BY_ID} from '../../gql/query/account'
import { useParams } from 'react-router-dom'
// import { useQuery } from '@apollo/client'
import { Query } from '@apollo/client/react/components'

const ViewBusiness =()=>{
    const { id } = useParams();
    
    return(
        <div>
            <p>Data Business</p>
            <Query query={GET_BUSINESS_BY_ID} variables={{businessId:id}}>
                    {
                        ({loading,err,data})=>{
                            if(err){
                                console.log(err)
                            }
                            if(loading){
                                return(<p>(loading)</p>)
                            }
                            if(!data.getBusinessById){
                                return(
                                    <div>
                                        <p>User Not Found!</p>
                                    </div>
                                )
                            }
                            let adminProfile = data.getBusinessById
                           
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
export default ViewBusiness