import React , {Component} from 'react'
import userIcon from '../../img/usericon.png';
import {Icon} from 'antd';
class MyStock extends Component{

    render(){
        const myStock  = this.props.myStockdescription;

        return(
                   
                    <tr className="single-row">
                        <td><img src={userIcon} alt="user icon"/>{ myStock.user.firstname } { myStock.user.lastname }</td>
                        <td>Change:{myStock.change}</td>
                        <td>GRAPH</td>
                        <td>{myStock.sell}</td>
                        <td>{myStock.buy}<br/><br/>
                            <button className="sell-btn"><Icon type="double-right" className="bold-icon"/>Sell</button>
                        </td>
                    </tr>
                    
        )
    }
}

export default MyStock;