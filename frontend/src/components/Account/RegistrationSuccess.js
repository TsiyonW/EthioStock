import React from 'react'
 import { useParams } from 'react-router-dom'
const RegistrationSuccess =()=> {

    let { token } = useParams();
    console.log(token)
    return(
        <div>
            <h1>USER CREATED SUCCESSFULLY</h1>
            <h2>WE HAVE SENT A CONFIRMATION EMAIL PLEASE CHECK YOUR EMAIL</h2>
        </div>
    )
}

export default RegistrationSuccess