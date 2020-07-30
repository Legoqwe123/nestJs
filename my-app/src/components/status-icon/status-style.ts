import { createStyles, makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(() =>
  createStyles({
    statusIcon: {
      position: "absolute",
      width: 10,
      height: 10,
      borderRadius: 10,
      bottom: 0,
      right: 0,
    },
  }),
)
