import React , {Component} from 'react'
import { Icon } from 'antd'
// import {Icon} from 'antd';
class RecentTradesList extends Component{
    render(){
        return(
            <div className="recenttrades-container">
                <h2 className="recenttrades-header">Recent Trades</h2>
                <div className="recenttrades-contents">
                    <div className="recenttrades-single-head">
                        <ul>
                            <li className="left-head"><Icon className="recenttrades-user-icon" type="user"/><span className="trade-company-name">Habasha Beer</span></li>
                            <li className="right-head">Add to watchlist<Icon className="filedone-icon" type="file-done"/></li>
                        </ul>
<br/><br/>
                    </div>
                    <div className="clearfix">

                    </div>
                    <br/>
                    <div className="recenttrade-indicators">
                        
                        <p><span className="sell-indicator"><Icon type="double-right" className="bold-icon"/>Sell</span><span className="sell-figure">52.56</span></p><br/>
                        <p><span className="buy-indicator"><Icon type="double-left" className="bold-icon"/>Buy</span><span className="buy-figure">52.56</span></p>
                    </div>
                    <br/>
                    <div>
                        <ul>
                            <li className="left-head">View <Icon type="eye"/></li>
                            <li className="right-head">Change: -0.24</li>
                        </ul>
                    </div>

                    {/* <br/><br/> */}


{/* {
                    notifications.map((notification)=>{
                        <Notification notificationDetail = {notification}/>
                    })
                } */}
                
                <div className="clearfix">

                </div>
                {/* <p> jfalskfjlkafjl lkjflksdjf l kjfslkja sdfl jflksajfd afjd alskjfd aslfdj lksfdj  fsdfasdf a sdf asfd</p>
                <p> fskldfja dflaksjfd this sis thing is s o awsome this thing is so awsome this thing is so awsome</p>
                 */}
                </div>
                
            </div>
        )
    }
}

export default RecentTradesList;