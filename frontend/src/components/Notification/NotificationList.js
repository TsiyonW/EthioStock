import React , {Component} from 'react'
import {
    BellOutlined
  } from '@ant-design/icons';
class NotificationList extends Component{
    render(){
        // notifications = this.props
        return(
            <div className="notifications-container">
                <p className="notification-header"><BellOutlined className="bell-icon"/>Notifications</p>
                <div className="notification-contents">
{/* {
                    notifications.map((notification)=>{
                        <Notification notificationDetail = {notification}/>
                    })
                } */}
                <p> jfalskfjlkafjl lkjflksdjf l kjfslkja sdfl jflksajfd afjd alskjfd aslfdj lksfdj  fsdfasdf a sdf asfd</p>
                <p> fskldfja dflaksjfd this sis thing is s o awsome this thing is so awsome this thing is so awsome</p>
                
                </div>
                
            </div>
        )
    }
}

export default NotificationList