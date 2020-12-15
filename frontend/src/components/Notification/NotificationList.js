import React , {Component} from 'react'

import { Card,Button,notification,Badge } from 'antd';
import {Link} from 'react-router-dom'
const close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
  };
  
  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Confirm
      </Button>
    );
    notification.open({
      message: 'Notification Title',
      description:
        'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: close,
    });
  };
class NotificationList extends Component{
    render(){
        // notifications = this.props
        return(
            <>
         
            <div className="notifications-container">
                  < Card title="Notification"  extra={ <Button  onClick={openNotification}><Badge size="default" count={5}>
      <Link to="/" className="head-example" /></Badge></Button>} >
                      
                 
                 
            
   
            
              
               </ Card>
                </div>
                
            
           </>
        )
    }
}

export default NotificationList