import React, { Component } from 'react'
import {CREATE_POST_MUTATION} from '../../gql/mutation/post'

import { Mutation } from "@apollo/client/react/components";
import { Form,Input, Modal, Alert,Button} from 'antd'
import Header from '../Businessowner/Header'
import auth from '../../Auth';


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

                    <Header handleLogout = {this.logout}/>
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
                        

                 </div>
            </div>
        )
    }

}
export default CreatePost;