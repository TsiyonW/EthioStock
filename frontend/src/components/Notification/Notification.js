import React , {Component} from 'react';
class Notification extends Component{
    render(){
        const notificationTitle, handleNotificationClose = props
    
        return(
            <div>
                <p>{notificationTitle}</p>
                {/* do something about the click button */}
                <button className="notification-close-btn" onClick = {handleNotificationClose}>X</button>
            </div>
        )
    }
    
}
export default Notification

