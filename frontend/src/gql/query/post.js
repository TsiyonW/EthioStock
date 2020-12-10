import {gql} from '@apollo/client'

export const GET_ALL_POSTS = gql`
{

        allPosts{
            id
            title
            description
            date
            reactionSet{
              id
              isLike
              isDislike
              reactedby{
                username
                firstName
              }
            }
            commentSet{
              id
              comment
              commentedTime
              commentedBy{
                id
                username
                firstName
                lastName
            }
          }
        }
      
}
    `