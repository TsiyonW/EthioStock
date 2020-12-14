import React, { useState } from "react";
import { Query } from "@apollo/client/react/components";
import withAuth from "../../routers/withAuth";
import { Form, Input, Button, Alert } from "antd";
import { useMutation } from "@apollo/client";
import { UPDATE_PROFILE } from "../../gql/mutation/account";
import { GET_USER_PROFILE } from "../../gql/query/account";

const UpdateProfile = (props) => {
  let [errMessage, setErrorMessage] = useState("");
  let [errExists, setErrExists] = useState(false);

  const [updateAccount] = useMutation(UPDATE_PROFILE, {
    onCompleted(updateAccount) {
      const { success, message } = updateAccount.updateAccount;
      if (!success) {
        setErrExists((errExists = true));
        setErrorMessage((errMessage = message));
      } else {
      }
    },
  });
  const handleClose = () => {
    setErrExists((errExists = false));
  };
  const onFinish = (values) => {
    console.log(values);
    updateAccount({
      variables: {
        firstName: values.firstName,
        lastName: values.lastName,
      },
    });
  };

  return (
    <div>
      <p>Data admin</p>
      {console.log("User", props.user)}
      <Query query={GET_USER_PROFILE}>
        {({ loading, err, data }) => {
          if (err) {
            console.log(err);
          }
          if (loading) {
            return <p>(loading)</p>;
          }
          let userProfile = data.getUserProfile;
          return (
            <div>
              {errExists ? (
                <Alert
                  message="Error"
                  description={errMessage}
                  type="error"
                  showIcon
                  closable
                  afterClose={handleClose}
                />
              ) : (
                <p></p>
              )}
              <Form
                initialValues={{
                  firstName: userProfile.firstName,
                  lastName: userProfile.lastName,
                }}
                ref={props.formRef}
                name="add_investor_info"
                onFinish={onFinish}
              >
                {/* get from user context */}
                {/* <p>Investor firstname</p>
            <p>Investor middle name</p>
            <p>Investor lastname</p>
            <p>Investor woreda</p>
            <p>Investor subcity</p>
            <p>Investor address</p> */}

                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[
                    { required: true, message: "Please input firstname!" },
                    {
                      max: 25,
                      message:
                        "First Name shouldn't be more than 25 characters!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[
                    { required: true, message: "Please input lastname!" },
                    {
                      max: 25,
                      message:
                        "Last Name shouldn't be more than 25 characters!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Form.Item>
              </Form>
            </div>
          );
        }}
      </Query>
    </div>
  );
};
export default withAuth(UpdateProfile);
