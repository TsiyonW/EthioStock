import React, { Component } from 'react'
// import {AUTH_TOKEN} from '../constants'
import userIcon from '../../img/usericon.png'
import CommentList from '../Comment/CommentList'
// import {useMutation} from '@apollo/client'
import {Icon} from 'antd';
import _ from 'lodash';
class Post extends Component{

    render() {

        const post  = this.props.postDetail;
        const comments = this.props.postDetail.commentSet;
        const reactions  = this.props.postDetail.reactionSet;
        let likes = 0, dislikes = 0
        // const { addComment, {data}} = useMutation()
        
        if(_.size(reactions)>=1){
            
            let  i = 0;
            for (i ;i<reactions.length;i++){
                if (reactions[i].isLike){
                    likes++
                }
                else if(reactions[i].isDislike){
                    dislikes++
                }
            }
        }
            
        return (
            <div className="single-post-container">
                <div className="post-header">
                    <div className="post-header-title">
                        <h2 className="post-title-container"><img src = {userIcon} alt="userIcon"/><span className="post-title">{post.title}</span></h2>
                   
                    </div>
                    {/* <div className="post-header-commands">
                        <ul>
                            <li>
                                <Icon type="edit" className="edit-icon"/>Edit</li>
                            <li>
                                <Icon type="delete" className="delete-icon"/>Delete</li>
                        </ul>
                    </div> */}
               
                </div>
                
                <div className="post-description">
                    {post.description}
                </div>
                <div className="post-comments">
                    <p>Comments</p>
                    <CommentList  comments = {comments}/>
                </div>
                
                <div className="post-likes">
                <span><Icon type = "like" className="like-icon"/>{likes}</span>
                <span><Icon type = "dislike" className="like-icon"/>{dislikes}</span>
                </div>

                

                <div className="post-commenting-spot">
                    <img src = {userIcon} alt="userIcon"/>
                    👍👎<input type = "text" placeholder="Post Review"/>
                    <button>Post</button>
                </div> 
    
            </div>
          
            )
      }
}

export default Post