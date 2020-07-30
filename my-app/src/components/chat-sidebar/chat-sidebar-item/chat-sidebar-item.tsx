import React from "react"

import { Typography, ListItem } from "@material-ui/core"

import { useStyles } from "../chat-style"

import { AvatarIcon } from "../../avatar-icon/avatar-icon"
import { StatusIcon } from "../../status-icon/status-icon"

type Props = {
  id: string
  users: string
  status: string
  userId: string
  handle: (item: any) => void
}

export const ChatSidebarItem = ({
  id,
  users,
  status,
  handle,
}: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <ListItem key={id} className={classes.sidebarItem} onClick={handle}>
      <AvatarIcon name={users}>
        <StatusIcon status={status} />
      </AvatarIcon>
      <Typography className={classes.listItemText} color="textPrimary">
        {users}
      </Typography>
    </ListItem>
  )
}
