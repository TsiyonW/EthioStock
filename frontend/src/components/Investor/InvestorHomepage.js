import React, { Component } from "react";
import "../../styles/styles.scss";
import graph from "../../img/bg.jpg";
import HeaderI from "../Investor/InvestorHeader";
import Notifications from "../Notification/NotificationList";

import { Affix, Button, Layout, Card, Row, Col } from "antd";
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from "@ant-design/icons";
import SideBarI from './Sidebar'
const { Footer } = Layout;
// const { Meta } = Card;

class InverstorHomepage extends Component {
  state = {
    searchField: "",
  };
  displaySideBar=()=>{
    document.getElementById("sidebar-container-s").style.display = "block";
}
closeSideBar=()=>{
    document.getElementById("sidebar-container-s").style.display = "none";
}
  render() {
    return (
      <div>
          <SideBarI closeSideBar= {this.closeSideBar}/>
           
        <div className="publichomepage-container">
          <Affix offsetTop={0} onChange={(affixed) => console.log(affixed)}>
            <HeaderI
              handleLogout={this.handleLogout}
              headerButtons={false}
              displaySideBar={this.displaySideBar}
            />
  
          </Affix>
             
          <div className="container">
            <Affix offsetTop={120} onChange={(affixed) => console.log(affixed)}>
              <Notifications />{" "}
            </Affix>
          </div>
          <div>
            <Row>
              <Col>
                <Card
                  title="Habesha Beer"
                  extra={
                    <Button type="danger">
                      <b>-</b>
                    </Button>
                  }
                  style={{ width: 300, marginLeft: 20, marginTop: 20 }}
                  cover={<img alt="example" src={graph} />}
                  actions={[
                    <div>
                      <p>
                        <span className="sell-indicator">
                          <DoubleRightOutlined className="bold-icon" />
                          Sell
                        </span>
                        <span className="sell-figure">52.56</span>
                        <span className="buy-indicator">
                          <DoubleLeftOutlined className="bold-icon" />
                          Buy
                        </span>
                        <span className="buy-figure">52.56</span>
                      </p>
                    </div>,
                  ]}
                ></Card>
              </Col>
              <Col>
                <Card
                  title="Habesha Beer"
                  extra={
                    <Button type="danger">
                      <b>-</b>
                    </Button>
                  }
                  style={{ width: 300, marginLeft: 20, marginTop: 20 }}
                  cover={<img alt="example" src={graph} />}
                  actions={[
                    <div>
                      <p>
                        <span className="sell-indicator">
                          <DoubleRightOutlined className="bold-icon" />
                          Sell
                        </span>
                        <span className="sell-figure">52.56</span>
                        <span className="buy-indicator">
                          <DoubleLeftOutlined className="bold-icon" />
                          Buy
                        </span>
                        <span className="buy-figure">52.56</span>
                      </p>
                    </div>,
                  ]}
                ></Card>
              </Col>

              <Col>
                <Card
                  title="Habesha Beer"
                  extra={
                    <Button type="danger">
                      <b>-</b>
                    </Button>
                  }
                  style={{ width: 300, marginLeft: 20, marginTop: 20 }}
                  cover={<img alt="example" src={graph} />}
                  actions={[
                    <div>
                      <p>
                        <span className="sell-indicator">
                          <DoubleRightOutlined className="bold-icon" />
                          Sell
                        </span>
                        <span className="sell-figure">52.56</span>
                        <span className="buy-indicator">
                          <DoubleLeftOutlined className="bold-icon" />
                          Buy
                        </span>
                        <span className="buy-figure">52.56</span>
                      </p>
                    </div>,
                  ]}
                ></Card>
              </Col>
            </Row>
          </div>
          <Footer
            style={{
              textAlign: "center",
              height: "auto",
              marginTop: "200%",
              background: "#CEECE8",
            }}
          >
            Ethiostock ©2020{" "}
          </Footer>
          <br />{" "}
        </div>

        {/* <Footer style={{ textAlign: 'center'  , marginTop:'auto' ,background:'#CEECE8'}}>Ethiostock ©2020 </Footer> */}
      </div>
    );
  }
}

export default InverstorHomepage;
