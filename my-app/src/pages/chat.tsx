import React, { useState } from "react"

import { Header } from "../components/header/header"
import { ChatSidebar } from "../components/chat-sidebar/chat-bar"
import { ChatWindow } from "../components/chat-window/chat-window"
import { Box, makeStyles, createStyles } from "@material-ui/core"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    wrapper: {
      border: "2px solid #3F51B5",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    },
  }),
)

export const ChatPage = (): React.ReactElement => {
  const classes = useStyles()

  const [id, setId] = useState<string>("")

  return (
    <>
      <Header auth={true} />
      <Box className={classes.root}>
        <Box display="flex" className={classes.wrapper}>
          <ChatSidebar handleId={setId} />
          <ChatWindow id={id} />
        </Box>
      </Box>
    </>
  )
}
