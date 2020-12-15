import React, { Component } from 'react'
import {CREATE_POST_MUTATION} from '../../gql/mutation/post'

import { Mutation } from "@apollo/client/react/components";
import auth from '../../Auth';
import {  Form,Input, Alert,Modal, Button,Card,Affix,Layout} from 'antd'
import HeaderB from '../Businessowner/BusinessHeader'
import bg from '../../img/bg.jpg';
const {  Footer } = Layout;



class CreatePost extends Component{
    formRef = React.createRef();
    state ={
        description:'',
        title:'',
        image:'', 
        modalVisible:false,
        createSuccess:false,
        createFail:false,
        createMessage:''
    }
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

    getMutationResponse = (data)=>{
        this.formRef.current.resetFields();
        this.hideModal()
        let post = data.createPost
        if(post.success){
            this.setState({
                createSuccess:true,
                createMessage:post.message
            })
        }
        if(!post.success){
            this.setState({
                createFail:true,
                createMessage:post.message
            })           
        }
    }
    onFinish = (values)=>{
        this.setState({
            image:values.image,
            description:values.description,
            title:values.title
        })
        this.showModal()
    }
    handleErrorAlertClose=()=>{
        this.setState({
            createFail:false
        })
    }
    handleSuccessAlertClose=()=>{
        this.setState({
            createSuccess:false
        })
    }
    logout= (e)=>{
        auth.logOut()
        this.props.history.push('/login')
    }
    render(){
        const {description,title,image,createSuccess, createFail, createMessage} = this.state

    return(
            <div>

                <div>
<Affix>
                  <HeaderB handleLogout = {this.logout} />
                </Affix>
                 <Card bordered={false} cover={<img alt="example" src={bg}  style={{   transparent :1 , marginTop:-10 ,opacity: 0.3 , height:200 , display:"block" ,} }/> }>
             <Card style={{width:750 ,height:325 , opacity: 0.7,marginTop:-80, marginLeft:400 ,background:"whitesmoke"}}>
                <div>
                 <h3>Create Post</h3> <br/>
                <Card style={{width:750 ,height:270 , marginTop:-25, marginLeft:-25 ,background:"white"}}> 
                  
                    <Form ref={this.formRef} onFinish={this.onFinish}>
                    {createFail?<Alert
                              message="Error"
                              description={createMessage}
                              type="error"
                              showIcon
                              closable 
                              afterClose={this.handleErrorAlertClose}
                            />:<p></p>}
                    {createSuccess?<Alert
                              message="Success"
                              description={createMessage}
                              type="success"
                              showIcon
                              closable 
                              afterClose={this.handleSuccessAlertClose}
                            />:<p></p>}
                        <Form.Item name="title" label="Title"
                        rules={[{required:true, message:'Title is required!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item name="description" label="Description"
                        rules={[{required:true, message:'Description is requierd!'}]}
                        >
                            <Input/>
                        </Form.Item>
                        
                        <Form.Item name="image" label="Uplaod Image">
                            <Input/>
                        </Form.Item>
                        
                        <Form.Item>
                            <Button htmlType="submit">Create Post</Button>
                        </Form.Item>
                        

                    </Form>

                    <Modal
                        title="Create post"
                        visible={this.state.modalVisible}
                        footer={[
                            <Button key = "back" onClick={this.hideModal}>
                              Return
                            </Button>,
                            <Mutation
                            key="createpostMutation"
                            mutation={CREATE_POST_MUTATION}
                            variables={{title, description, image}}
                            onCompleted={data=>this.getMutationResponse(data)}
                            >
                                {
                                    (mutation, {loading, error})=>(
                                        <span>
                                            <Button key="submitcreatepost" onClick={mutation}>Post</Button>
                                        </span>
                                    )
                                }
                            </Mutation>
                          ]}
                        >
                        <p>Title: {title}</p>
                        <p>Description: {description}</p>
                        <p>Some contents...</p>
                    </Modal>
                        

                                        
</Card>
                 </div>
                 </Card>
                 </Card>
                 <br/><br/><br/><br/><br/>
                 <Footer style={{ textAlign: 'center'  , marginTop:'auto' ,background:'#CEECE8'}}>Ethiostock ©2020 </Footer>
            </div>
            </div>
        )
    }

}
export default CreatePost;