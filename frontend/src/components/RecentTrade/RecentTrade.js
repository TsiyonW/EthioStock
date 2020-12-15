import React , {Component} from 'react'
import {  Button,Card } from 'antd'
import graph2 from '../../img/i.png';
import {DoubleLeftOutlined,DoubleRightOutlined} from '@ant-design/icons';
//import { Icon } from 'antd'
// import {Icon} from 'antd';
class RecentTradesList extends Component{
    
    render(){
        return(
            <div className="recenttrades-container">
                
                  
                     <div className="recenttrades-single-head"> 
                    <div>
         


         <Card title="Recent Trade "  >
                
             <Card title="Habesha Beer" extra={<Button type="primary"><b>+</b></Button>} style={{ width: 300 }}
             cover={<img alt="example" src={graph2}/>}
             actions={[
                
                <p className="sell-indicator"><DoubleRightOutlined key="edit" />Sell</p>,
                <p className="buy-indicator"><DoubleLeftOutlined key="ellipsis" />Buy</p>
             
              
                 
               ]}>


               
             </Card>

             
                 
                
         </Card>

</div>


                 
                
                <div className="clearfix">

                </div>
                
                </div>
                
            </div>
        )
    }
}

export default RecentTradesList;