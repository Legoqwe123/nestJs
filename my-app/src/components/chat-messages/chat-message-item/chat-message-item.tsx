import React from "react"
import { Box } from "@material-ui/core"

import { useStyles } from "../chat-messages-style"

interface Props {
  time: number
  role: "sender" | "recipient"
  message: string
  key: number
}

export const ChatMessageItem = ({
  time,
  role,
  message,
}: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <Box
      display="flex"
      justifyContent={role === "sender" ? "flex-end" : "flex-start"}
    >
      <Box display="inline-flex" className={classes.message}>
        {message}
      </Box>
    </Box>
  )
}
