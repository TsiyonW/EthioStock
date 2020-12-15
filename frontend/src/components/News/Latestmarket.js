import React , {Component} from "react";
// import Header from '../Investor/Header'
// import auth from '../../Auth'
// import RecentTradesList from "../RecentTrade/RecentTrade";
// import MyStockList from "../Stock/MyStockList";
// import SideBar from '../Account/Sidebar';
// import userIcon from '../../img/usericon.png';
import graph from '../../img/istock.jpg';
import { Statistic } from 'antd';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

//import { assertNamedType } from "graphql";
// import { Query } from "react-apollo";
// const {  Footer } = Layout;

class MarketLatest extends Component{
   
    render(){
        return(
        //   <div className="latest_market">
        //     <Card>
        //   <Carousel autoplay style={{width:40}>
        //   <div>
        //     <h3>1</h3>
        //   </div>
        //   <div>
        //     <h3>2</h3>
        //   </div>
        //   <div>
        //     <h3>3</h3>
        //   </div>
        //   <div>
        //     <h3>4</h3>
        //   </div>
        // </Carousel>
        // </Card>
        
        // </div>
        
            <div style={{  padding: '30px'  }}>

                <Row gutter={16} >
                <Col span={8}  >
                       
                         
                        <Card hoverable style={{ width: 400 }} cover={<img alt="example" src={graph} />} actions={[ <Statistic title="Active" value={11.28} precision={2} valueStyle={{ color: '#3f8600' }}  suffix="%" /> ,<Statistic title="Idle" value={9.3} precision={2} valueStyle={{ color: '#cf1322' }} suffix="%"/>,]}>
                        <Meta title="CompanyName" description="www.instagram.com" />
                        </Card>
              
                </Col>
                
                <Col span={8}  >
                       
                         
                       <Card hoverable style={{ width: 400 }} cover={<img alt="example" src={graph} />} actions={[ <Statistic title="Active" value={11.28} precision={2} valueStyle={{ color: '#3f8600' }}  suffix="%" /> ,<Statistic title="Idle" value={9.3} precision={2} valueStyle={{ color: '#cf1322' }} suffix="%"/>,]}>
                       <Meta title="CompanyName" description="www.instagram.com" />
                       </Card>
             
               </Col>
               <Col span={8}  >
                       
                         
                       <Card hoverable style={{ width: 400 }} cover={<img alt="example" src={graph} />} actions={[ <Statistic title="Active" value={11.28} precision={2} valueStyle={{ color: '#3f8600' }}  suffix="%" /> ,<Statistic title="Idle" value={9.3} precision={2} valueStyle={{ color: '#cf1322' }} suffix="%"/>,]}>
                       <Meta title="CompanyName" description="www.instagram.com" />
                       </Card>
             
               </Col>
              
                        
                        

                </Row>

             </div>
       
          
        )
    }
}

export default MarketLatest;


