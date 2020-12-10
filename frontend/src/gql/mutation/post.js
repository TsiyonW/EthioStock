
import {gql} from '@apollo/client'

export const CREATE_POST_MUTATION = gql`
mutation CreatePost($description:String!, $title:String!, $image:Upload){
    createPost(description:$description, title:$title, image:$image){
        
        success
        message
        post{
            id
            title
            description
            date
            owner{
                id
                businessName
                
            }
        }
    }
}

`