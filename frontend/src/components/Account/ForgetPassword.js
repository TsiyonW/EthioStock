import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, Form, Card, Divider } from "antd";
import { FORGET_PASSWORD } from "../../gql/mutation/account";
import { useMutation } from "@apollo/client";
import Header1 from "./Header1";
import { LockFilled } from "@ant-design/icons";

const ForgetPassword = () => {
  // let [email, setEmail] = useState('');
  let [showForgetPass, setShowForgetPass] = useState(true);
  let [showSuccess, setShowSuccess] = useState(false);
  let [errMessage, setErrMessage] = useState("");

  const [resetPassword] = useMutation(FORGET_PASSWORD, {
    onCompleted(resetPassword) {
      const { success, errors } = resetPassword.sendPasswordResetEmail;
      if (success) {
        setShowForgetPass({ showForgetPass: false });
        setShowSuccess({ showSuccess: true });
      }
      if (!success) {
        setErrMessage(errors[Object.keys(errors)[0]][0].message);
      }
    },
  });

  const hideStyle = {
    display: "None",
  };
  const showStyle = {
    display: "block",
  };

  const onFinish = (values) => {
    console.log(values);
    resetPassword({ variables: { email: values.email } });
  };
  return (
    <div>
      <div>
        <Header1 />
      </div>

      <Card
        style={{
          width: 750,
          height: 415,
          marginTop: 100,
          marginLeft: 400,
          background: "whitesmoke",
        }}
      >
        <h3>
          <LockFilled /> Enter your email adress and we'll send you a link to
          reset your password.
        </h3>

        <Divider />
        <Card
          style={{
            width: 750,
            height: 250,
            marginTop: -25,
            marginLeft: -25,
            background: "white",
          }}
        >
          <h3>Email Address</h3>
          <Form name="login_form" onFinish={onFinish}>
            <Form.Item name="email">
              <Input placeholder="e.g. email@domail.com" />
            </Form.Item>
            <Form.Item>
              {" "}
              <Button
                htmlType="submit"
                className="forgetPass_btn"
                style={{
                  background: "rgb(46,175,143)",
                  borderColor: "rgb(46,175,143)",
                  color: "white",
                }}
              >
                Reset Password
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <br></br>
        <p>
          Don't have an account ?
          <Form.Item>
            <Button htmlType="submit" className="signup-button">
              <Link to="/signup"> Create Account</Link>
            </Button>
          </Form.Item>
        </p>
      </Card>
    </div>
  );
};

export default ForgetPassword;
