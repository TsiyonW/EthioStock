import {gql} from '@apollo/client'
 
export const BUSINESS_CREATED_SUBSCRIPTION = gql`
subscription OnBusinessOwnerCreated{
    businessOwnerCreated{
      id
      business
    }
  }
`;