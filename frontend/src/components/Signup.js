import React from 'react';
import LoginSignupHeader from './LoginSignupHeader';
import '../styles/styles.scss';
import { Icon } from 'antd';
import ReactDOM from 'react-dom';
import LoginPage from './Login';
class SignupPage extends React.Component{
  state = {

  }
  
  register(){

  }  

  redirectToLogin(){
    ReactDOM.render(<LoginPage />, document.getElementById('root'));
  }

  render(){

    return(
      <div className = "signup-container ">
        
        <LoginSignupHeader/>
        <div className = "login-flex-container">

        <div className = "login-signup-left-side">
            <p><span className = "icon"><Icon type = "stock"/></span>Data analysis and price prediction</p>
            <p><span className = "icon"><Icon type="file-done" /></span>Have watchlists</p>
            <p><span className = "icon"><Icon type="dollar" /></span>Apply for stocks and manage your application</p>
            <p><span className = "icon"><Icon type="reconciliation" /></span>Submit applications through dynamic forms</p>          
          </div>

          <div className = "login-signup-right-side signup-form">
            <h1>Signup</h1>
            <form onSubmit={this.register}>
              <div>
                <Icon type = "user" className ="input-icon"/>
                <input type="text" placeholder="username or email" name="username"/><br/><br/>
            
              </div>
              <div>
                <Icon type = "mail"  className ="input-icon"/>
                <input type="text" placeholder = "Email" name="email"/><br/><br/>
           
              </div>

              <div>
                <Icon type = "key"  className ="input-icon"/>
                <input type="password" placeholder = "password" name="password"/><br/><br/>
           
              </div>

              <div>
                <Icon type = "key"  className ="input-icon"/>
                <input type="password" placeholder = "re-password" name="password"/><br/>
           
              </div>

              <button
               className = "signup-link"
               onClick ={this.redirectToLogin}
               >have an account?</button>
              <input type="submit"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;