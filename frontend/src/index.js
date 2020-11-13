import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import { setContext } from 'apollo-link-context'
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-client'
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache } from 'apollo-cache-inmemory'


import * as serviceWorker from './serviceWorker'
import './styles/styles.scss'
import auth from './Auth'
import AppRouter from './routers/AppRouter'


const httpLink = createUploadLink({
    uri: 'http://127.0.0.1:8000/graphql/',
    // onError: ({ networkError, graphQLErrors }) => {
    //     console.log('graphQLErrors', graphQLErrors)
    //     console.log('networkError', networkError)
    //   }
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

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })


ReactDOM.render(
    <BrowserRouter>

      <ApolloProvider client={client}>
          <AppRouter/>
      </ApolloProvider>
    
    </BrowserRouter>, 
    document.getElementById('root')
    );

serviceWorker.unregister();
