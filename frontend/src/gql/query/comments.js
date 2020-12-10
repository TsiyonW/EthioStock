
import {gql} from '@apollo/client'

export const GET_COMMENTS_BY_POST_ID = gql`
    {
        comments(postId:$id){
            comment
            commentedBy{
                id
                username 
                firstName
                lastName
            }
            commentedTime
        }
    }
    
    `