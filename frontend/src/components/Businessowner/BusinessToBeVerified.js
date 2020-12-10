import React, {useState} from 'react'
import withAuth from '../../routers/withAuth'
import { useMutation} from '@apollo/client'
import { DECLINE_BUSINESS_ACCOUNT, APPROVE_BUSINESS_ACCOUNT } from '../../gql/mutation/account'
import BusinessProfile from '../Businessowner/BusinessProfile';

function BusinessToBeVerified(props){
    let [isViewBusiness, setIsViewBusiness] = useState(false);

    const [approveBusiness] = useMutation(APPROVE_BUSINESS_ACCOUNT)
    const [declineBusiness] = useMutation(DECLINE_BUSINESS_ACCOUNT)
    const businessAccount = props.businessAccount
    
    const userProfile = props.user
    if(userProfile.userType !== "Admin"){

        this.props.history.push('/homepage')

    }
    if(isViewBusiness){
        return(
            <BusinessProfile businessAccount = {businessAccount}/>
        )
    }
        return(
            <div>
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
                <button onClick={()=>{ approveBusiness({variables:{businessId:businessAccount.id}}); }}>Approve</button>
                <button onClick={()=>{declineBusiness({variables:{businessId:businessAccount.id}}); }}>Deny</button>
                <button onClick={()=>{setIsViewBusiness(isViewBusiness = true)}}>View Business</button>
            </div>
        )
    }


export default withAuth(BusinessToBeVerified);