import React from "react"
import { Route, Switch } from "react-router-dom"

import { MainPage } from "../main"

export const PublicPages = (): React.ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  )
}
