import React from 'react'
import Comment from './Comment';
const CommentList = (props) =>(
    
    <div>
        {props.comments.map((comment)=>(
            <Comment key={comment.id} commentDetail = {comment}/>
))}
    </div>
)


export default CommentList;
