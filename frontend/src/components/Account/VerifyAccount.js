import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button } from "antd";
import { VERIFY_ACCOUNT } from "../../gql/mutation/account";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const VerifyAccount = () => {
  let [errMessage, setErrorMessage] = useState("");
  let [showLoginLink, setShowLoginLink] = useState(false);
  let [showVerifyBtn, setShowVerifyBtn] = useState(true);

  const [verify] = useMutation(VERIFY_ACCOUNT, {
    onCompleted(verify) {
      const { success, errors } = verify.verifyAccount;
      if (!success) {
        setShowVerifyBtn((showVerifyBtn = false));
        setErrorMessage(
          (errMessage = errors[Object.keys(errors)[0]][0].message)
        );
      }
      if (success) {
        setShowLoginLink((showLoginLink = true));
        setShowVerifyBtn((showVerifyBtn = false));
        setErrorMessage((errMessage = "Account Successfully verified"));
      }
    },
  });

  const { token } = useParams();

  const onFinish = () => {
    verify({ variables: { token } });
  };

  const hideStyle = {
    display: "None",
  };
  const showStyle = {
    display: "block",
  };

  return (
    <div>
      <div>
        <p>{errMessage}</p>
      </div>
      <div style={showVerifyBtn ? showStyle : hideStyle}>
        <Form name="verify-account" onFinish={onFinish}>
          <Form.Item>
            <Button htmlType="submit">VERIFY ACCOUNT</Button>
          </Form.Item>
        </Form>
      </div>

      <div style={showLoginLink ? showStyle : hideStyle}>
        
        <Button className="signup-link">
          <Link to="/login"> Log in</Link>
        </Button>
      </div>
    </div>
  );
};

export default VerifyAccount;
