import {gql} from '@apollo/client'
 
export const INVESTOR_CREATED_SUBSCRIPTION = gql`
subscription OnInvestorCreated{
    investorCreated{
      id
      account{
          id
          username
      }
    }
  }
`;

export const HELLO = gql`
  subscription OnHello{
      hello
  }
`