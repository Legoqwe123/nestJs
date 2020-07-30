import React from "react"
import { Route, Switch } from "react-router-dom"

import { ChatPage } from "../chat"

export const PrivatePages = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={ChatPage} />
    </Switch>
  )
}
