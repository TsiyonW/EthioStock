import React ,{Component} from 'react';
import { Form,Button,} from 'antd';
import { Redirect } from "react-router-dom";
import withAuth from "../../routers/withAuth";
// import store from '../../store'
import 'antd/dist/antd.css';
import '../../styles/styles.scss';
import Header from '../Businessowner/Header'
import auth from '../../Auth'
const FormItem = Form.Item;

class VerifyAdmin extends Component{
  state = {

    modalVisible:false,    
    resultMessage : '',
    registerSuccess:false,
  };
  showModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  hideModal = () =>{
    this.setState({
        modalVisible: false,
      });       
  }



  onFinish = (values) => {
 
  }
  handleLogout=(e)=>{
    auth.logOut()
    return(<Redirect to="/login" />)
    // this.props.history.push('/login')
}
displaySideBar=()=>{
    document.getElementById("sidebar-container-s").style.display = "block";
}
closeSideBar=()=>{
    document.getElementById("sidebar-container-s").style.display = "none";
}
  render(){

    // const {users} = store.getState()
    const userProfile = this.props.user
   

    return(
      <div className = "signup-container ">                              
        
        <Header handleLogout = {this.handleLogout} userType={userProfile.userType} headerButtons={false}  displaySideBar = {this.displaySideBar}/>



        <div className = "signup-content">
          <h1>Verify Admin</h1>

          {/* <Modal
            
            key="veriyAdminModal"
            visible={this.state.modalVisible}
            footer={
              [
                <Button key="veriyAdminCancel"  onClick={this.hideModal}>Cancel</Button>,
                <Mutation
                  key="veriyAdminMutation"
                  mutation={}
                  variables={{
                     

                  }}
                  onCompleted={data=>this.getMutationResponse(data)}
                >{
                  (mutation, {loading,error})=>(
                    <span>
                      <Button key="veriyAdminSubmit" onClick={mutation}>Save</Button>
                    </span>
                  )
                }

                </Mutation>
              ]
            }
          >

            

          </Modal> */}

          <Form ref={this.formRef} onFinish={this.onFinish}>

            <FormItem>
              <Button type="primary" htmlType="submit">Verify Admin</Button>
            </FormItem>

          </Form>
          
        </div>   
      </div> 
    );
  }
}
export default withAuth(VerifyAdmin)