import React from 'react';
import LoginSignupHeader from './LoginSignupHeader';
import '../styles/styles.scss';
import { Icon } from 'antd';
import SignupPage from './Signup'
import ReactDOM from 'react-dom';

class LoginPage extends React.Component{
  authenticate(){

  }
  
  redirectToSignup(){
    ReactDOM.render(<SignupPage />, document.getElementById('root'));
  }
  
  render(){
    return(
      <div className = "login-container ">
        
        <LoginSignupHeader/>
        <div className = "login-flex-container">

        <div className = "login-signup-left-side">
            <p><span className = "icon"><Icon type = "stock"/></span>Data analysis and price prediction</p>
            <p><span className = "icon"><Icon type="file-done" /></span>Have watchlists</p>
            <p><span className = "icon"><Icon type="dollar" /></span>Apply for stocks and manage your application</p>
            <p><span className = "icon"><Icon type="reconciliation" /></span>Submit applications through dynamic forms</p>          
          </div>

          <div className = "login-signup-right-side login-form">
            <h1>Login</h1>
            <form onSubmit={this.authenticate}>
              <div>
                <Icon type = "user" className ="input-icon"/>
                <input type="text" placeholder="username or email" name="username"/><br/><br/>
            
              </div>
              <div>
                <Icon type = "key"  className ="input-icon"/>
                <input type="password" placeholder = "password" name="password"/><br/>
           
              </div>

              <button 
              className = "signup-link"
              onClick = {this.redirectToSignup}
              >Signup?</button>
              <input type="submit"/>
            </form>
          </div>



        </div>
        




      </div>
    );
  }
}

export default LoginPage;