
import gql from 'graphql-tag'

export const CREATE_POST_MUTATION = gql`
mutation CreatePost($description:String!, $title:String!, $image:Upload){
    createPost(description:$description, title:$title, image:$image){
        post{
            id
            title
            description
            date
            owner{
                id
                business
            }
        }
    }
}

`