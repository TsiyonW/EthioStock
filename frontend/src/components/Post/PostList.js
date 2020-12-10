import React from 'react'
import Post from './Post';
const PostList = (props) =>(
    <div className="posts-container">
        {   
            props.posts.map((post)=>(
                <Post key={post.id} postDetail = {post}/>
                )
                )
        }
            
    </div>
)


export default PostList;