import React, { SetStateAction, Dispatch } from "react"
import {
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
  Box,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

import { useStyles } from "./chat-style"
import { ChatSidebarList } from "./chat-sidebar-list/chat-sidebar-list"

interface Props {
  handleId: Dispatch<SetStateAction<string>>
}

export const ChatSidebar = ({ handleId }: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <Box className={classes.sidebar}>
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <IconButton className={classes.burgerIcon}>
          <MenuIcon htmlColor="#fff" />
        </IconButton>
        <Typography variant="h6" noWrap className={classes.textToolbar}>
          Friends List
        </Typography>
      </Toolbar>
      <ChatSidebarList handleId={handleId} />
    </Box>
  )
}
