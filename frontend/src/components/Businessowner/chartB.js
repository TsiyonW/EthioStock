import React , { Component } from 'react';
import './Profile.css';
import {Layout, Typography,Avatar,Input, Menu , Button,Divider,Steps ,Upload,Breadcrumb ,Spin ,Statistic, Card, Row, Col} from 'antd';
import { MenuOutlined,LogoutOutlined ,FormOutlined,LineChartOutlined,UserOutlined,UploadOutlined,ReadFilled,SignalFilled,PieChartFilled ,ArrowUpOutlined, ArrowDownOutlined ,LikeOutlined } from '@ant-design/icons';
import { BrowserRouter as Router,Switch, Route, Link } from "react-router-dom";
const { Search } = Input;
const{ Header , Footer , Sider ,Content } = Layout;
const { Title } = Typography;
const {SubMenu} = Menu;
const {Step} = Steps






    function chartB() {

        return (
          <div className="App">
          {/***************************Header ***************************/}
          <Layout>
      
      <Header style ={ {padding : 10 , height :300, width: '100%' ,position: 'relative', background:'#CEECE8' }}>
          <Menu style ={ {background:'#CEECE8', height: 90 }}>
              <Menu.Item style ={ {  width :'10' ,float: "left" ,display: 'block' }}><Link to ="/">< MenuOutlined/></Link></Menu.Item> 
              <Menu.Item style ={ {  width :'10' ,float: "left" , fontSize :20 , fontFamily:'sans-serif'}}><Link to ="/">EthioStock</Link></Menu.Item>
              <Menu.Item style ={ {  width :'10' ,float: "right"}}><Divider type="vertical" /><LogoutOutlined />Logout</Menu.Item>
              <Menu.Item style ={ {  width :'10' ,float: "right"}}><Divider type="vertical" /><FormOutlined />WatchList</Menu.Item>
              <Menu.Item style ={ {  width :'10' ,float: "right"}}><Divider type="vertical" /><LineChartOutlined />ActivityLog</Menu.Item>
              <Menu.Item style ={ {  width :'10' ,float: "right"}}><Search placeholder="Search Buisnesses" onSearch={value => console.log(value)} style={{ width: 400 ,borderRadius:25 ,align : 'center'}}/></Menu.Item>
  
              
              
          </Menu>
      </Header>
      </Layout>
  
       
          {/***************************Main Content ***************************/}
          <Layout>
            <Content>
              <div className ="body1">

                 <div className="site-statistic-demo-card">
                    <Row style={{width:300 ,height:40 , marginTop:-13}} >
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
                  
                <p style={ {marginTop:-90 , marginLeft:150 ,fontSize:20 }} ><Divider type="vertical" /><h><strong>CompanyName</strong></h> <br/> </p>
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
                                    <Menu.Item key="2"><Link to="/stats"><ReadFilled />Stats</Link></Menu.Item>
                                    <Menu.Item key="3" active><Link to ="/"><PieChartFilled />Chart</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to="/Research"><LineChartOutlined />Research</Link></Menu.Item>
                                    
                              </Menu>
                            </Switch>
                         </Router>  
                    </div>
              </div>
            </Content>
                <br/>


           




                    
            <Content style ={{height :500 , width:740, background:'white', marginLeft:100,marginTop:10 ,paddingTop :60, overflowWrap:10 ,position:"relative"}}>
              <Spin size="large" style={{ marginLeft:300 , marginTop:130}} tip="Loading Top Feeds..." />
            
           
                
            </Content>
           
  
         </Layout>














          {/***************************Footer***************************/}
          <Footer style={{width: '100%'}}>
             
             <p style ={ {background:'#CEECE8', textAlign : "center" }}>Author: EthioStock<br/>
                EthioStock@gmail.com
             </p>

             
         </Footer>
           
            
 
    

    </div>
 );
}

    export default chartB;