import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { setContext } from '@apollo/client/link/context'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
// import { InMemoryCache } from 'apollo-cache-inmemory'
import * as serviceWorker from './serviceWorker'
import './styles/styles.scss'
import auth from './Auth'
import { AUTH_TOKEN } from './constants'
import AppRouter from './routers/AppRouter'
import { WebSocketLink } from '@apollo/client/link/ws';
import { split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new WebSocketLink({
  uri: `ws://127.0.0.1:8000/graphql`,
  options: {
    reconnect: true
  },
  connectionParams: {
    authToken: localStorage.getItem(AUTH_TOKEN),
  },
});



const httpLink = createUploadLink({
    uri: 'http://127.0.0.1:8000/graphql/',
    onError: ({ networkError, graphQLErrors }) => {
        console.log('graphQLErrors', graphQLErrors)
        console.log('networkError', networkError)
      }
})

const authLink = setContext((_, { headers }) => {
  const token =auth.getToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : ''
    }
  }
})
// spliltLink argumenents
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink),
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
})


ReactDOM.render(
    <BrowserRouter>

      <ApolloProvider  client={client}>
          <AppRouter/>
      </ApolloProvider>
    
    </BrowserRouter>, 
    document.getElementById('root')
    );

serviceWorker.unregister();
