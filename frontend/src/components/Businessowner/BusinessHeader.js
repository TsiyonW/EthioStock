import React from "react";
import "../../styles/styles.scss";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import {
  MenuOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import SearchBox from "../Account/SearchBox";
class HeaderB extends React.Component {
  state = {
    searchField: "",
  };

  render() {
    return (
      <div className="publichomepage-container">
        <div className="header-flex-box">
          <div className="header-flex-box-title">
            <div>
              <ul>
                <li
                  className="menu-unfold-btn"
                  onClick={this.props.displaySideBar}
                >
                  <MenuOutlined size={200} />
                </li>
                <li>
                  {" "}
                  <img
                    src={logo}
                    alt="Logo"
                    style={{ width: 40, height: 40 }}
                  />
                </li>
                <li>
                  <span className="header-title">EthioStock</span>
                </li>
                <li>
                  {" "}
                  <div className="header-flex-box-search">
                    <SearchBox
                      placeholder="Search ..."
                      handleChange={(e) =>
                        this.setState({ searchField: e.target.value })
                      }
                    />
                  </div>
                </li>
                <li>
                  <ul className="ul-side3">
                    <li>
                      <NavLink to="/businesshomepage" activeClassName="active-link">
                        <TeamOutlined className="header-icon" />
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/watchlist" activeClassName="active-link">
                        <TeamOutlined className="header-icon" />
                        Watchlist
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/mystock" activeClassName="active-link">
                        <TeamOutlined className="header-icon" />
                        My Stock
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/profile" activeClassName="active-link">
                        <UserOutlined className="header-icon" />
                        My Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/login" onClick={this.props.handleLogout}>
                        <LogoutOutlined className="header-icon" />
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <br />
      </div>
    );
  }
}
export default HeaderB;
