/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react"

export const AuthContext = React.createContext({
  storage: {
    userId: undefined ? undefined : "",
    token: undefined ? undefined : "",
  },
  login: (_token: string, _id: string) => {},
  logout: () => {},
})
