import React from "react"
import { Toolbar, Typography, Box } from "@material-ui/core"

import { useStyles } from "./chat-window-style"

import { ChatMessageForm } from "../chat-message-form/chat-message-from"
import { ChatMessages } from "../chat-messages/chat-messages"

export const ChatWindow = ({ id }: { id: string }): React.ReactElement => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">Name userchat</Typography>
      </Toolbar>
      <ChatMessages id={id} />
      <ChatMessageForm classes={classes} id={id} />
    </Box>
  )
}
