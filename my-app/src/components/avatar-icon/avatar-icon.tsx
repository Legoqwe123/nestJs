import React from "react"
import { Avatar } from "@material-ui/core"

import { useStyles } from "./avatar-styles"

type Props = {
  name: string
  children: React.ReactNode
}

export const AvatarIcon = ({ name, children }: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <Avatar className={classes.avatar}>
      {name.slice(0, 2).toLocaleUpperCase()}
      {children}
    </Avatar>
  )
}
