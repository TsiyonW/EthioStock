


import { Comment, Avatar, Form, Button, List, Input,Layout } from 'antd';
import {Affix, Card, Tooltip} from 'antd'
import Header3 from '../Account/Header1'
import RecentTradesList from "../RecentTrade/RecentTrade";
import SideBar from '../Account/Sidebar';
import moment from 'moment';
import {Link} from 'react-router-dom'
// import graph from '../../img/istock.jpg';
import bg from '../../img/bg.jpg';
import bg1 from '../../img/t2.jpg';
import React , {Component} from "react";
import { DislikeOutlined, LikeOutlined, } from '@ant-design/icons';
const {  Footer } = Layout;

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea  rows={4} onChange={onChange} value={value} style={{width:800,height:10}} placeholder="Add a Comment" />
   
      <Button  htmlType="submit" loading={submitting} onClick={onSubmit} >
        Post
      </Button>
    </Form.Item>
  </>
);



class NewsFeed extends Component{
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
        this.setState({
          submitting: false,
          value: '',
          comments: [
            {
              author: 'Han Solo',
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              content: <p>{this.state.value}</p>,
              datetime: moment().fromNow(),
            },
            ...this.state.comments,
          ],
        });
      }, 1000);
    };

    handleChange = e => {
        this.setState({
          value: e.target.value,
        });
      };
  render() {
    const { comments, submitting, value } = this.state;
    const { likes, dislikes } = this.state;
    const actions = [ <span key="comment-basic-like">
    <Tooltip title="Like">
      <
      DislikeOutlined
      />
    </Tooltip>
    <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
  </span>,
  <span key=' key="comment-basic-dislike"'>
    <Tooltip title="Dislike">
      <LikeOutlined
      />
    </Tooltip>
    <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
  </span>,
  <span key="comment-basic-reply-to">Reply to</span>,
];

    

    

   
// -------------------------------------------------------------------------------------------
    return (
      <>
      
      <div>
                  <Affix offsetTop={0} onChange={affixed => console.log(affixed)}>
                  <div className="homepage-header">
                      <Header3 handleLogout = {this.logout}   displaySideBar = {this.displaySideBar}/>
 
                  </div>
                  </Affix>
                <Affix offsetTop={120} onChange={affixed => console.log(affixed)}><RecentTradesList/></Affix>
                  
                  <SideBar closeSideBar= {this.closeSideBar}/>

                  <Card style={{width:1000, height:"auto" , background:'white',marginLeft:20}}    cover={<img alt="example" src={bg}/>}>
                 
                    
                          
                               <Comment
        actions={actions}
        author={<Link to="/">HHS</Link>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        
        content={
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes beautifully
            and efficiently.
          </p>
        }
      
        
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>

        }/>
        
        <Comment
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
              
            />
          }
          content={
            <Editor style={{width:30}}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
            
          }
          
        />
         {comments.length > 0 && <CommentList comments={comments} />}


                          </Card>
<br/>


                          <Card style={{width:1000, height:"auto" , background:'white',marginLeft:20}}    cover={<img alt="example" src={bg1}/>}>
                 
               
                       
                            <Comment
     actions={actions}
     author={<Link to="/">HHS</Link>}
     avatar={
       <Avatar
         src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
         alt="Han Solo"
       />
     }
     
     content={
       <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                       incididunt ut I abore et dolore magna aliqua. Ut enim ad minim veniam, quis
                       nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       Duis aute irure dolor in reprehederit in voluptate velit esse cillum dolore eu fugiat
                       nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt incididunt
                       culpa qui officia deserunt nollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                       incididunt ut I abore et dolore magna aliqua. Ut enim ad minim veniam, quis
                       nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
       </p>
     }
     
     datetime={
       <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
         <span>{moment().fromNow()}</span>
       </Tooltip>

     }/>
     
     <Comment
       avatar={
         <Avatar
           src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
           alt="Han Solo"
           
         />
       }
       content={
         <Editor style={{width:30}}
           onChange={this.handleChange}
           onSubmit={this.handleSubmit}
           submitting={submitting}
           value={value}
         />
         
       }
       
     />
      {comments.length > 0 && <CommentList comments={comments} />}


                       </Card>



    

                 
      
      
                          <Footer style={{ textAlign: 'center'  , marginTop:'100%' ,background:'#CEECE8'}}>Ethiostock ©2020 </Footer>

        </div>
      </>
    );
  }
}

export default NewsFeed;
