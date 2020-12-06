import React from "react";
import "../../styles/styles.scss";
// import headerImage from '../img/login_header.PNG'

class LoginSignupHeader extends React.Component {
  render() {
    return (
      <div className="login-signup-container">
        {/* <img src = {headerImage}/> */}
        <div className="login-signup-head">
          <p className="main-header">EthioStock</p>
          <p className="sub-header">Building Life Long Investment</p>
        </div>
      </div>
    );
  }
}
export default LoginSignupHeader;
