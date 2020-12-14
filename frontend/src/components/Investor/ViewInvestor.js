import React from 'react'
import {GET_INVESTOR_BY_ID} from '../../gql/query/investor'
import { useParams } from 'react-router-dom'
// import { useQuery } from '@apollo/client'
import { Query } from '@apollo/client/react/components'

const ViewInvestor =()=>{
    const { id } = useParams();
    
    return(
        <div>
            <p>Data admin</p>
            <Query query={GET_INVESTOR_BY_ID} variables={{investorId:id}}>
                    {
                        ({loading,err,data})=>{
                            if(err){
                                console.log(err)
                            }
                            if(loading){
                                return(<p>(loading)</p>)
                            }
                            let investorProfile = data.getInvestorById
                            if(!data.getInvestorById){
                                return(
                                    <div>
                                        <p>Investor Account Not Found!</p>
                                    </div>
                                )
                            }
                            return(
                                <div>
                                    <h2>Admin</h2>
                                    <p>Id: {investorProfile.id}</p>
                                    <p>E-mail: {investorProfile.email}</p>
                                    <p>Username: {investorProfile.username}</p>
                                    <p>First Name: {investorProfile.firstName}</p>
                                    <p>Middle Name: {investorProfile.middleName}</p>
                                    <p>Last Name: {investorProfile.lastName}</p>
                                    <p>Phone Number: {investorProfile.phoneNo}</p>
                                    <p>Sex: {investorProfile.sex}</p>
                                    <p>Address: {investorProfile.address}</p>
                                    <p>Subcity: {investorProfile.subcity}</p>
                                    <p>Woreda: {investorProfile.woreda}</p>
                                    {investorProfile.investor?
                                <div>
                                        <p>{investorProfile.investor.investorKebele}</p>
                                        <p>{investorProfile.investor.investorHouseNo}</p>
                                        <p>{investorProfile.investor.investorOccupation}</p>
                                        <p>{investorProfile.investor.investorResidentId}</p>
                                        <p>{investorProfile.investor.investorDrivingLicenceId}</p>
                                        <p>{investorProfile.investor.investorPassportNumber}</p>
                                        <p>{investorProfile.investor.investorNationality}</p>
                                        <h2>Respondent or representative info</h2>
                                        <p>{investorProfile.investor.respondentFirstName}</p>
                                        <p>{investorProfile.investor.respondentMiddleName}</p>
                                        <p>{investorProfile.investor.respondentLastName}</p>
                                        <p>{investorProfile.investor.respondentKebele}</p>
                                        <p>{investorProfile.investor.respondentHouseNo}</p>
                                        <p>{investorProfile.investor.respondentOccupation}</p>
                                        <p>{investorProfile.investor.respondentPhoneNo}</p>
                                        <p>{investorProfile.investor.respondentResidentId}</p>
                                        <p>{investorProfile.investor.respondentDrivingLicenceId}</p>
                                        <p>{investorProfile.investor.respondentPassportNumber}</p>
                                        {/* <p>{investorProfile.investor.}</p> */}

                                        
                                </div>    :<p></p>
                                }
                                    
                                </div>
                            )
                        }
                    }

                </Query>
                 

        </div>
    )
}
export default ViewInvestor