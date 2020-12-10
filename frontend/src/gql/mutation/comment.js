
import {gql} from '@apollo/client'

export const COMMENT = gql`
    
        mutation Comment($postId:Int!, $comment:String!){
            comment(postId:$postId, comment:$comment){
              commentPosted{
                 id
                 commentedTime
                 comment   
                 commentedBy{
                   id
                   username
                   email
                   firstName
                   lastName
                }
              }
            }
        }
    
    `