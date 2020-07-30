import React from "react"

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

import ChatIcon from "@material-ui/icons/Chat"
import { SvgIcon, Box } from "@material-ui/core"
import { IconExitButton } from "../../components/iconExit/icon-exit"

interface Props {
  auth?: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      fontSize: 30,
    },
    iconExit: {
      fontSize: 30,
      marginRight: theme.spacing(2),
    },
    toolBar: {
      justifyContent: "space-between",
    },
  }),
)

export const Header = ({ auth }: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6">ChatApp</Typography>
          <Box>
            <SvgIcon htmlColor="#fff" className={classes.menuButton}>
              <ChatIcon />
            </SvgIcon>
          </Box>

          {auth && <IconExitButton classname={classes.iconExit} />}
        </Toolbar>
      </AppBar>
    </div>
  )
}
