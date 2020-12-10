import React ,{Component} from 'react'
class Comment extends Component{

    render() {

        const comment  = this.props.commentDetail;
        return(
            <div className="single-comment-container">
                <p>{`${comment.commentedBy.firstName} ${comment.commentedBy.lastName} ${comment.commentedTime}`} </p>
                <p>{comment.comment}</p>
            </div>
        )
    }
}
export default Comment;
