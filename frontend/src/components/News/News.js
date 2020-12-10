import React, { Component } from 'react'
// import {AUTH_TOKEN} from '../constants'
import userIcon from '../../img/usericon.png'
import CommentList from '../Comment/CommentList'
import {Icon} from 'antd';

class News extends Component{

    render() {

        const news  = this.props.newsDetail;

        return (
            <div className="single-news-container">
                <div className="news-header">
                    <div className="news-header-title">
                        <h2 className="news-title-container"><img src = {userIcon} alt="userIcon"/><span className="news-title">{news.title}</span></h2>
                   
                    </div>
                    
               
                </div>
                
                <div className="news-description">
                    {news.newsDescription}
                </div>

                <div className="news-likes">
                <p><Icon type = "like" className="like-icon"/>{news.likes}</p>
                </div>

                <div className="news-comments">
                    <p>Comments</p>
                    <CommentList comments = {news.comments}/>
                </div>

                <div className="news-commenting-spot">
                    <img src = {userIcon} alt="userIcon"/>
                    👍👎<input type = "text" placeholder="news Review"/>
                    <button>Post</button>
                </div>

            </div>
          
            )
      }
}

export default News