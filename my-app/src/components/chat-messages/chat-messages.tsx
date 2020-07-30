import React from "react"
import { Box } from "@material-ui/core"

import { useStyles } from "./chat-messages-style"
import { ChatMessagesList } from "./chat-messages-list/chat-messages-list"

interface Props {
  id: string
}

export const ChatMessages = ({ id }: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <Box className={classes.chatMessages}>
      <ChatMessagesList id={id} />
    </Box>
  )
}
