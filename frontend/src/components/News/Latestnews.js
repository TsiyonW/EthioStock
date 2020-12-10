import React , {Component} from "react";

import graph from '../../img/istock.jpg';
import { Layout ,Carousel } from 'antd';
import { Skeleton, Switch, Icon, Avatar,Card, Col, Row,Button } from 'antd';

const { Meta } = Card;

//import { assertNamedType } from "graphql";
// import { Query } from "react-apollo";
const {  Footer } = Layout;
class Marketnews extends Component{
   
    render(){
        return(
            <div style={{  padding: '30px '  , marginTop :"0%"}}>
                  {/* <Card title="HeadLines" hoverable style={{ width: 345 , height:"auto"  }} extra={<a href="#">More</a>} >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut I abore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehederit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt incididunt
                        culpa qui officia deserunt nollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut I abore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea ........{<a href="#">More</a>}
                         </p>   
                        </Card>
                 */}
                <Row gutter={16}>
              <Col span={8}  >
            <Card hoverable style={{ width: 400 }} cover={<img alt="example" src={graph} /> }>
                <Meta title="Europe Street beat" description="www.instagram.com"  />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut I abore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehederit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt incididunt
                        culpa qui officia deserunt nollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut I abore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea ........{<a href="#">More</a>}
                         </p>  
                         
            </Card>
            </Col>
            <Col span={8}  >
            <Card hoverable style={{ width: 400 }} cover={<img alt="example" src={graph} />}>
                <Meta title="Europe Street beat" description="www.instagram.com" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut I abore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehederit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt incididunt
                        culpa qui officia deserunt nollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut I abore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea ........{<a href="#">More</a>}
                         </p>   
            </Card>
            </Col>
            <Col span={8}  >
            <Card hoverable style={{ width: 400 }} cover={<img alt="example" src={graph} />}>
                <Meta title="Europe Street beat" description="www.instagram.com" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut I abore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehederit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt incididunt
                        culpa qui officia deserunt nollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut I abore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea ........{<a href="#">More</a>}
                         </p>   
            </Card>
            </Col>
           
            </Row>
         </div>
   
        
          
          
        )
    }
}

export default Marketnews;