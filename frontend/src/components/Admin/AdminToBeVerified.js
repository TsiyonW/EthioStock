import React, {useState} from "react";
import withAuth from "../../routers/withAuth";
import { useMutation } from "@apollo/client";
import { CREATE_ADMIN } from "../../gql/mutation/account";
import { Redirect } from "react-router-dom";
import { Form, Modal , Button} from "antd";
const AdminToBeVerified = (props) => {
    // let [errMessage, setErrorMessage] = useState("");
    let [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {setModalVisible({modalVisible:true})};
    const hideModal = () => {setModalVisible({modalVisible:false})};
    
      const approveAdminF = (data) => {
        approveAdmin({ variables: { accountId: adminAccount.id } });
        hideModal();
      };
  const adminAccount = props.adminAccount;
  const [approveAdmin] = useMutation(CREATE_ADMIN, {
    onCompleted(adminNotV) {
      const { success, message } = adminNotV.createAdmin;
      if (!success) {
        console.log(message)
        return <Redirect to="/adminhomepage" />;
      }
    },
  });

  const userProfile = props.user;
  if (userProfile.userType !== "Admin") {
    this.props.history.push("/homepage");
  }

  return (
    <div>
        <Modal
            title="User Registration"
            visible={modalVisible}
            onOk={approveAdminF} onCancel={hideModal}
    >

        </Modal>
      <Form>
        <Form.Item>
          <p>E-mail: {adminAccount.email}</p>
        </Form.Item>

        <p>User ID: {adminAccount.id}</p>
        <Form.Item>
          <p>First Name: {adminAccount.firstName}</p>
        </Form.Item>

        <p>Last Name: {adminAccount.lastName}</p>
        <Form.Item>
          <p>Username: {adminAccount.username}</p>
        </Form.Item>

        <p>Usertype: {adminAccount.userType}</p>
        <Form.Item>
          <p>Username: {adminAccount.address}</p>
        </Form.Item>

        <Form.Item>
          <p>Usertype: {adminAccount.dateJoined}</p>
        </Form.Item>

        <Form.Item>
        <Button
        onClick={showModal}
      >
        Approve
      </Button>
        </Form.Item>
      </Form>

    </div>
  );
};

export default withAuth(AdminToBeVerified);
