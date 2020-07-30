import React from "react"
import { Box } from "@material-ui/core"

import { useStyles } from "./status-style"

interface Props {
  status: string
}

export const StatusIcon = ({ status }: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <Box
      bgcolor={status === "OFFLINE" ? "error.main" : "success.main"}
      className={classes.statusIcon}
    />
  )
}
