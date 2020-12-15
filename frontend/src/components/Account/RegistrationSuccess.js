import React from 'react'
import {Card,Button} from 'antd'
import {Link, } from 'react-router-dom'
//  import queryString from 'query-string'
 import { useParams } from 'react-router-dom'
const RegistrationSuccess =()=> {

    let { token } = useParams();
    console.log(token)
    return(
        <div>
            <Card style={{width:750 ,height:215 , marginTop:100, marginLeft:400 ,background:"whitesmoke"}}>
            <h2 style={{textAlign:"center"}}>USER CREATED SUCCESSFULLY</h2>
            <Card style={{width:750 ,height:200 , marginTop:25, marginLeft:-25 ,background:"white"}}>
            <h3>WE HAVE SENT A CONFIRMATION EMAIL PLEASE CHECK YOUR EMAIL</h3>
          <br/><br/><Button style={{width:"40%", marginLeft: "30%" ,background: "rgb(46,175,143)", borderColor: "rgb(46,175,143)" ,color:'white' }}><Link to="/login">Login</Link></Button>
            </Card>
            </Card>

        </div>
    )
}

export default RegistrationSuccess