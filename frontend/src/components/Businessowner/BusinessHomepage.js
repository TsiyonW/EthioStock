import React, {Component} from 'react'
import withAuth from '../../routers/withAuth'
import HeaderI from '../Investor/InvestorHeader'
import News from '../News/News'
import auth from '../../Auth'
import bg from '../../img/bg.jpg';
import bg1 from '../../img/t2.jpg';
import {Layout,Avatar,Menu , Button,Divider,Spin ,Statistic, Card, Row, Col, Affix } from 'antd';
import { LineChartOutlined,UserOutlined,ReadFilled,PieChartFilled ,ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import {  Link } from "react-router-dom";
import {Redirect} from 'react-router-dom'
import Notifications from '../Notification/NotificationList'
import SideBarB from './Sidebar'
const{ Footer  ,Content } = Layout;

class BusinessHomepage extends Component{
    handleLogout=(e)=>{
        auth.logOut()
        return(<Redirect to="/login" />)
        // this.props.history.push('/login')
    }
    displaySideBar=()=>{
        document.getElementById("sidebar-container-s").style.display = "block";
    }
    closeSideBar=()=>{
        document.getElementById("sidebar-container-s").style.display = "none";
    }
    render(){
        const userProfile = this.props.user
   
        return(
            <div>
               

           
            <div >
                  
                <HeaderI handleLogout = {this.handleLogout} userType={userProfile.userType} headerButtons={false}  displaySideBar = {this.displaySideBar}/>
<SideBarB onClose={this.closeSideBar}/>
                <Layout>
            <Content>
                <Affix>
              <div className ="body1">

                 <div className="site-statistic-demo-card">
                    <Row style={{width:400 ,height:40 , marginTop:-13}} >
                      <Col >
                        <Card style={{ marginTop:20}} >
                          <Statistic
                            title="Active"
                            value={11.28}
                            
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                          />
                        </Card>
                      </Col>
                      <Col >
                        <Card style={{ marginTop:20}} >
                          <Statistic
                            title="Idle"
                            value={9.3}
                            
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<ArrowDownOutlined />}
                            suffix="%"
                          />
                        </Card>
                      </Col>
                    </Row>
                </div>
                  
                <div style={ {marginTop:-100 , marginLeft:150 ,fontSize:20 }} className="p_h"><Divider type="vertical" /><p><strong>CompanyName</strong></p>  </div>
                <div> <Avatar shape="square" size={140}  icon={<UserOutlined /> }  style={{marginTop:-35 , marginLeft:5 }}></Avatar> </div>
                <Button style={{ marginTop: -200, marginLeft:1300 }} type="primary">
                        TRADE
                  </Button>
                            
                
                  
                 
                 
                 
                  <Divider></Divider>

                  <br/>
                   <div className="Mid-menu">
                              <Menu mode="horizontal" defaultSelectedKeys={['1']} >
                                    <Menu.Item key="1" ><Link to="/BusProfile"><ReadFilled />Feed</Link></Menu.Item>
                                    <Menu.Item key="2" active><Link to="/"><ReadFilled />Stats</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to ="/chartB"><PieChartFilled />Chart</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to="/Research"><LineChartOutlined />Research</Link></Menu.Item>
                                    
                              </Menu>
                              
                    </div>
              </div>
             
              </Affix>
            
            </Content>
            <Affix offsetTop={250} onChange={affixed => console.log(affixed)}>
           <Notifications />
           </Affix>
            
                <br/>


           




                    
            <Content style ={{height :'auto' , width:1040, background:'white', marginLeft:10,marginTop:10 ,paddingTop :60, overflowWrap:10 ,position:"relative"}}>
              <Card  cover={<img alt="example" src={bg}/>}></Card>
              <News />
              {/* <Card title="Habesha Beer" extra={<Button type="danger"><b>-</b></Button>} style={{ width: 300 , marginLeft:20 , marginTop:20 }}
                        cover={<img alt="example" src={graph}/>} */}
           
                
            </Content>
            <Content style ={{height :'auto' , width:1040, background:'white', marginLeft:5,marginTop:10 ,paddingTop :60, overflowWrap:10 ,position:"relative"}}>
              <Card  cover={<img alt="example" src={bg1}/>}></Card>
              <News />
            
           
                
            </Content>
            <Content style ={{height :500 , width:1040, background:'white', marginLeft:5,marginTop:10 ,paddingTop :60, overflowWrap:10 ,position:"relative"}}>
              <Spin size="large" style={{ marginLeft:500 , marginTop:130}} tip="Loading Top Feeds..." />
            
           
                
            </Content>
           
            
         </Layout>
        
        


      




            </div>
            <Footer style={{ textAlign: 'center'  , marginTop:'200%' ,background:'#CEECE8'}}>Ethiostock ©2020 </Footer>
           
            </div>
        )
    }
}

export default withAuth(BusinessHomepage);