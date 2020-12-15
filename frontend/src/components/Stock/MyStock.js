import React from 'react'
import userIcon from '../../img/usericon.png';
import {Card,Avatar,Button} from 'antd';
import graph from '../../img/istock.jpg';
// import HeaderI from "../Investor/InvestorHeader";
// import HeaderB from "../Businessowner/BusinessHeader";
// import HeaderA from "../Admin/AdminHeader";
// import SideBarA from "../Admin/Sidebar"
// import SideBarB from "../Businessowner/Sidebar"
// import SideBarI from "../Investor/Sidebar"
import auth from '../../Auth'
import withAuth from "../../routers/withAuth";

import {DoubleLeftOutlined,DoubleRightOutlined} from '@ant-design/icons';
const MyStock =(props)=>{

  const userProfile = props.user
  const myStock  = props.myStockdescription;
        const { Meta } = Card;
        const logout = (e) => {
          auth.logOut();
          this.props.history.push("/login");
        };
      
        const displaySideBar = () => {
          document.getElementById("sidebar-container-s").style.display = "block";
        };
        const closeSideBar = () => {
          document.getElementById("sidebar-container-s").style.display = "none";
        };

        return(
            <div style={{  padding: '30px' }}>
                  
                  

            <Card 
            title= { <p>{ myStock.user.firstName } { myStock.user.lastName } </p> }
            extra={<Button type="danger"><b>-</b></Button>} style={{ width: 300 }}
            cover={<img alt="example" src={graph}/>
            }
            actions={[
                <div>
                <button className="sell-btn"> <DoubleLeftOutlined/>Sell </button>
                <button className="sell-btn"><DoubleRightOutlined/> Buy </button>
                </div>
              
            ]}
          >
            <Meta
              avatar={<Avatar src= {userIcon}/>}
        
          
          description={<h>Change:{myStock.change} | Sell:{myStock.sell} | Buy:{myStock.buy} </h>
      
        }
          
          
            
            
           />  
           </Card>
           </div>
                    
        )
    }


export default withAuth(MyStock);