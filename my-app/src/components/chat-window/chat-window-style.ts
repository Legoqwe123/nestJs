import { createStyles, makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    form: {
      padding: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    toolbar: {
      background: "#fff",
      color: theme.palette.primary.main,
      border: "1px solid",
      borderColor: theme.palette.primary.main,
    },
    textArea: {
      fontFamily: "inherit",
      height: "45px !important",
      fontSize: "1rem",
      width: "100%",
      resize: "none",
      padding: 10,
      borderRadius: 10,
    },
  }),
)
