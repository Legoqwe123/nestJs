import { makeStyles, createStyles } from "@material-ui/core"

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    wrapper: {
      display: "flex",
      justifyContent: "center",
    },
    container: {
      border: "1.5px solid #3f51b5",
      borderRadius: "10px",
      padding: "10px",
      maxWidth: "100%",
      width: 400,
    },
    form: {
      display: "flex",
      flexDirection: "column",
      padding: "1rem 2.5rem",
    },
    icon: {
      fontSize: "2.5rem",
    },
    inputLogin: {
      marginTop: "3.5rem",
    },
    inputPassword: {
      marginTop: "0.5rem",
    },
    button: {
      marginTop: "3rem",
      height: "50px",
    },
    message: {
      height: "31px",
      width: "361px",
    },
  }),
)
