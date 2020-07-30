import { createStyles, makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) =>
  createStyles({
    avatar: {
      position: "relative",
      backgroundColor: theme.palette.info.dark,
      color: "#fff",
      overflow: "visible",
    },
  }),
)
