import React from 'react'
import { useQuery} from '@apollo/client'
import {GET_USER_REPORTS} from '../../gql/query/report'
import ReportToBeResolved from './ReportToBeResolved'
import withAuth from '../../routers/withAuth'
function ReportsToBeResolved(props){
    
    const {loading:loading_userreports,err:load_err, data:data_userreports} =useQuery(GET_USER_REPORTS)
    

        const userProfile = props.user
        // if user not admin dont display page
        if(userProfile.userType !== "Admin"){

            this.props.history.push('/homepage')

        }
        if(loading_userreports){
            return(<p>(loading)</p>)
        }
        if(load_err){
            console.log(load_err)
        }
        console.log(data_userreports)
        return(
            <div>
                
                {data_userreports.getAllReports.length>0? 
                data_userreports.getAllReports.map((userReport)=>{
                    return(<ReportToBeResolved  key={userReport.id} userReport = {userReport}/>)
                }):<p>No Reports Yet!</p>}
            </div>
        )
    }


export default withAuth(ReportsToBeResolved);