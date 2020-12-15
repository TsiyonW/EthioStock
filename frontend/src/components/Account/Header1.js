import React from "react";
import {  Affix } from "antd";
import "../../styles/styles.scss";
import { NavLink } from "react-router-dom";
import SearchBox from "./SearchBox";
class Header1 extends React.Component {
  state = {
    searchField: "",
  };

  render() {

    return (
      <div>
        <div className="publichomepage-container">
          <Affix offsetTop={0} onChange={(affixed) => console.log(affixed)}>
            <ul>
              <li>
                {" "}
                <button
                  className="menu-unfold-btn"
                  onClick={this.props.displaySideBar}
                ></button>
              </li>
              <li>
                <span className="header-title">EthioStock</span>{" "}
              </li>
              <li>
                {" "}
                <div className="header-flex-box-search">
                  {" "}
                  <SearchBox
                    placeholder="Search ..."
                    onSearch={(value) => console.log(value)}
                    enterButton
                  />
                </div>
              </li>
              <li>
                <ul className="ul-side">
                  
                  <li>
                    {/* <NavLink to="/adminhomepage" activeClassName="active-link">
                      adminhomepage
                    </NavLink> */}
                  </li>
                  <li>
                    <NavLink to="/signupuser" activeClassName="active-link">
                      Register
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/login">LogIn</NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </Affix>
          
          <br />
        </div>
      </div>
    );
  }
}
export default Header1;
