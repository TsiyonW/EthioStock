import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../styles/styles.scss";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import auth from "../Auth";
import { Mutation } from "react-apollo";
import { LOGIN_MUTATION } from "../gql/mutation/account";
import LoginSignupHeader from "./LoginSignupHeader";

const FormItem = Form.Item;

class Login extends Component {
  state = {
    email: "",
    password: "",
    loggedIn:false
  };
  authenticate() {}

  redirectToForgetPassword() {}

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.setState({ email: values.email, password: values.password });
      }
    });
  };
  _confirm(data) {
    const { token } = data.tokenAuth;
    auth.login(token);
    this.setState({loggedIn:true})
    
    // this.props.history.push(`/homepage`);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { email, password } = this.state;

    if(this.state.loggedIn){
      return(
        <Redirect to='/homepage'/>
      )
             
      

    }
    return (
      <div className="login-container ">
        <LoginSignupHeader />
        {/*Open Login Container*/}
        <div className="login-flex-container">
          {/* Open Flex box Container */}
          <div className="login-signup-left-side">
            {/* Open Left Side Flex box*/}
            <p>
              <span className="icon">
                <Icon type="stock" />
              </span>
              Data analysis and price prediction
            </p>
            <p>
              <span className="icon">
                <Icon type="file-done" />
              </span>
              Have watchlists
            </p>
            <p>
              <span className="icon">
                <Icon type="dollar" />
              </span>
              Apply for stocks and manage your application
            </p>
            <p>
              <span className="icon">
                <Icon type="reconciliation" />
              </span>
              Submit applications through dynamic forms
            </p>
          </div>{" "}
          {/*Close Left Side Flex box*/}
          <div className="login-signup-right-side login-form">
            {" "}
            {/*Open Right side Flex box*/}
            <h1>Login</h1>
            <Mutation
              mutation={LOGIN_MUTATION}
              variables={{ email, password }}
              onCompleted={data => this._confirm(data)}
            >
              {(mutation, { loading, error }) => (
                <Form onSubmit={this.handleSubmit} className="login-form">
                  {loading && <p>loading...</p>}
                  {error && (
                    <p class="authentication-error">
                      Please, inter valid credentials
                    </p>
                  )}

                  <FormItem>
                    {getFieldDecorator("email", {
                      rules: [
                        {
                          type: "email",
                          message: "The input is not valid E-mail!"
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!"
                        }
                      ]
                    })(
                      <Input
                        prefix={<Icon type="mail" style={{ fontSize: 15 }} />}
                        type="text"
                        placeholder="E-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your Password!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="lock"
                            style={{ fontSize: 15 }}
                            postfix={<Icon type="lock" />}
                          />
                        }
                        type="password"
                        placeholder="Password"
                        onChange={e =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    )}
                  </FormItem>
                  {getFieldDecorator("remember", {
                    valuePropName: "checked",
                    initialValue: true
                  })(<Checkbox>Remember me</Checkbox>)}
                  <Button
                    className="login-form-forgot signup-link"
                    onClick={this.redirectToForgetPassword}
                  >
                    Forgot password?
                  </Button>

                  <FormItem>
                    <Button
                      htmlType="submit"
                      className="login-form-button login-submit-btn"
                      onClick={mutation}
                    >
                      Log in
                    </Button>

                    <div>
                      Don't have an account?
                      <Button className="signup-link">
                        <Link to="/signupinvestor"> Sign up</Link>
                      </Button>
                    </div>
                  </FormItem>
                </Form>
              )}
            </Mutation>
          </div>{" "}
          {/*Close Right Side Flex box*/}
        </div>{" "}
        {/*Close Flex box Container*/}
        {/*Close Login Container*/}
      </div>
    );
  }
}
Login = Form.create()(Login);

export default Login;
