import React, { Component } from "react";
import userIcon from "../../img/usericon.png";
import { Link } from "react-router-dom";
import withAuth from "../../routers/withAuth";
import { Button } from "antd";
import {
  InfoCircleOutlined,
  FileDoneOutlined,
  LikeOutlined,
  AreaChartOutlined,
  CalendarOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
class Sidebar extends Component {
  render() {
    const closeSideBar = this.props.closeSideBar;
    const { user } = this.props;
    return (
      <div className="sidebar-container" id="sidebar-container-s">
        <div className="title-c">
          {" "}
          <button className="sidebar-close" onClick={closeSideBar}>
            <CloseCircleOutlined />
          </button>
          <br />
          <p className="title">EthioStock</p>
        </div>
        <div className="user-profile">
          <img src={userIcon} alt="userIcon" />
          <p>
            {user.firstName} {user.middleName}
          </p>
        </div>
        <div className="sidebar-menu">
          <br />
          <Button>
            <Link to="/profile">Customize Profile</Link>
          </Button>
          <br />
          <ul>
            <li>
              <Link to="/users">
                <CloseCircleOutlined className="like-icon" />
                Users
              </Link>
            </li>
            <li>
              <Link to="/reportstoberesolved">
                <FileDoneOutlined className="like-icon" />
                User Reports
              </Link>
            </li>
            <li>
              <Link to="/businessestobeverified">
                <LikeOutlined className="like-icon" />
                Businesses
              </Link>
            </li>
            <li>
              <Link to="/adminstobeverified">
                <AreaChartOutlined className="like-icon" />
                Admins
              </Link>
            </li>
            <li>
              <Link to="/newsfeed">
                <CalendarOutlined className="like-icon" />
                News Feed
              </Link>
            </li>
            <li>
              <Link to="/changepassword">Change Password</Link>
            </li>
          </ul>
          <div />
          <p className="menu-separator"></p>

          <div>
            <ul>
              <li>
                <LikeOutlined className="like-icon" />
                Help
              </li>
              <li>
                <LikeOutlined className="like-icon" />
                Guide
              </li>
              <li>
                <InfoCircleOutlined className="like-icon" />
                About us
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Sidebar);
