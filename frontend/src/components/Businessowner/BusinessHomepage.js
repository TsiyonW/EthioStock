import React, {Component} from 'react'
import withAuth from '../../routers/withAuth'
import HeaderB from './BusinessHeader'
import auth from '../../Auth'
import bg from '../../img/bg.jpg';
import {Layout,Avatar,Input, Menu , Button,Divider,Spin ,Statistic, Card, Row, Col, Affix } from 'antd';
import { MenuOutlined,LogoutOutlined ,FormOutlined,LineChartOutlined,UserOutlined,ReadFilled,PieChartFilled ,ArrowUpOutlined, ArrowDownOutlined ,LikeOutlined } from '@ant-design/icons';
import { BrowserRouter as Router,Switch, Link } from "react-router-dom";
import {Redirect} from 'react-router-dom'
import Notifications from '../Notification/NotificationList'
import RecentTrade from '../RecentTrade/RecentTradesList'
const { Search } = Input;
const{ Header , Footer  ,Content } = Layout;

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
                  
                <HeaderB handleLogout = {this.handleLogout} userType={userProfile.userType} headerButtons={false}  displaySideBar = {this.displaySideBar}/>

                <Layout>
            <Content>
                <Affix>
              <div className ="body1">

                 <div className="site-statistic-demo-card">
                    <Row style={{width:400 ,height:40 , marginTop:-13}} >
                      <Col >
                        <Card>
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
                        <Card>
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
                  
                <p style={ {marginTop:-90 , marginLeft:150 ,fontSize:20 }}  img src ={bg}><Divider type="vertical" /><h><strong>CompanyName</strong></h> <br/> </p>
                <span> <Avatar shape="square" icon='p' size={140}  icon={<UserOutlined /> }  style={{marginTop:-40 , marginLeft:5 }}></Avatar> </span>
                            
                
                  <Button style={{ marginTop: 16, marginLeft:900 }} type="primary">
                        TRADE
                  </Button>
                 
                 
                 
                  <Divider></Divider>

                 
                   <div className="Mid-menu">
                        <Router>   
                            <Switch>
                              <Menu mode="horizontal" defaultSelectedKeys={['1']} >
                                    <Menu.Item key="1" ><Link to="/BusProfile"><ReadFilled />Feed</Link></Menu.Item>
                                    <Menu.Item key="2" active><Link to="/"><ReadFilled />Stats</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to ="/chartB"><PieChartFilled />Chart</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to="/Research"><LineChartOutlined />Research</Link></Menu.Item>
                                    
                              </Menu>
                            </Switch>
                         </Router>  
                    </div>
              </div>
             
              </Affix>
            
            </Content>
            <Affix offsetTop={250} onChange={affixed => console.log(affixed)}>
           <Notifications />
           </Affix>
            
                <br/>


           




                    
            <Content style ={{height :500 , width:1040, background:'white', marginLeft:0,marginTop:10 ,paddingTop :60, overflowWrap:10 ,position:"relative"}}>
              <Spin size="large" style={{ marginLeft:500 , marginTop:130}} tip="Loading Top Feeds..." />
            
           
                
            </Content>
            <Content style ={{height :500 , width:1040, background:'white', marginLeft:0,marginTop:10 ,paddingTop :60, overflowWrap:10 ,position:"relative"}}>
              <Spin size="large" style={{ marginLeft:500 , marginTop:130}} tip="Loading Top Feeds..." />
            
           
                
            </Content>
            <Content style ={{height :500 , width:1040, background:'white', marginLeft:0,marginTop:10 ,paddingTop :60, overflowWrap:10 ,position:"relative"}}>
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