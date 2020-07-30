import { HttpLink, ApolloClient, InMemoryCache, split } from "@apollo/client"
import { getMainDefinition } from "@apollo/client/utilities"
import { WebSocketLink } from "@apollo/client/link/ws"

import { setContext } from "@apollo/client/link/context"

import Cookies from "js-cookie"

const uri = "http://localhost:5000/graphql"

const httpLink = new HttpLink({
  uri,
})

const wsLink = new WebSocketLink({
  uri: `ws://localhost:5000/graphql`,
  options: {
    reconnect: true,
  },
})

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get("token")

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    )
  },
  wsLink,
  httpLink,
)

export const client = new ApolloClient({
  uri,
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
})
