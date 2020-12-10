import React from 'react'
// import { useSubscription } from '@apollo/client'
import { HELLO} from '../../gql/subscription/investerSub'
// import {INVESTOR_CREATED_SUBSCRIPTION, HELLO} from '../gql/subscription/investerSub'
import { Subscription } from "@apollo/client/react/components";

 const BusinessUpdate =() =>(

        <Subscription subscription={HELLO}>
        {
            ({data})=>{
            return <h3>New User:{!data?"waiting..":<p>fdata returned {data.hello}{console.log(data)}</p>}</h3>
            }
        }
            </Subscription>
            
    )




export default BusinessUpdate;