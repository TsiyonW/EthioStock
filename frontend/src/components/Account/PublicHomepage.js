import React , {Component} from "react"
import {Link} from 'react-router-dom'

class PublicHomepage extends Component{
    render(){
        return(
            <div>

                <ul>
                    <li><Link to = '/signup'>Signup</Link></li>
                    <li><Link to ='/login'>Login</Link></li>
                    
                </ul>
            </div>
        )
    }
}

export default PublicHomepage;