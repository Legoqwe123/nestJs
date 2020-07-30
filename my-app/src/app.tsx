import React from "react"
import { ApolloProvider } from "@apollo/client"
import { BrowserRouter as Router } from "react-router-dom"

import { AuthContext } from "./context/auth-context"
import { PublicPages } from "./pages/public/public"
import { PrivatePages } from "./pages/private/private"
import { useAuth } from "./hooks/use-auth"
import { client } from "./init/client"

function App(): React.ReactElement {
  const { storage, login, logout } = useAuth()

  return (
    <ApolloProvider client={client}>
      <Router>
        <AuthContext.Provider value={{ storage, login, logout }}>
          {!storage.token ? <PublicPages /> : <PrivatePages />}
        </AuthContext.Provider>
      </Router>
    </ApolloProvider>
  )
}

export default App
