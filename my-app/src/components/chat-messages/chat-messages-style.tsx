import { createStyles, makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) =>
  createStyles({
    chatMessages: {
      width: 500,
      maxWidth: "100%",
      height: 400,
    },
    message: {
      border: `1px solid ${theme.palette.primary.light}`,
      padding: "5px 20px",
      borderRadius: "13px",
      background: "#fff",
      marginTop: 5,
      maxWidth: 350,
      wordBreak: "break-word",
    },
    messagesList: {
      padding: 25,
    },
  }),
)
