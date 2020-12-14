import React from 'react'
// import { useSubscription } from '@apollo/client'
import { HELLO, INVESTOR_CREATED_SUBSCRIPTION} from '../../gql/subscription/investerSub'
// import {INVESTOR_CREATED_SUBSCRIPTION, HELLO} from '../gql/subscription/investerSub'
import { Subscription } from "@apollo/client/react/components";

 const BusinessUpdate =() =>(

    <Subscription subscription={INVESTOR_CREATED_SUBSCRIPTION}>
        {/* <Subscription subscription={HELLO}> */}
        {
            ({data})=>{
            return <h3>New User:{!data?"waiting..":<p>fdata returned {data.id}{console.log(data)}</p>}</h3>
            }
        }
            </Subscription>
            
    )




export default BusinessUpdate;