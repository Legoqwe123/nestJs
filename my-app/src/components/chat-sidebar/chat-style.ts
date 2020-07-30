import { createStyles, makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) =>
  createStyles({
    sidebar: {
      borderRight: `1px solid ${theme.palette.primary.main}`,
    },
    sidebarList: {
      background: "#fff",
      height: 500,
    },
    burgerIcon: {
      padding: "0px",
      marginRight: 20,
    },
    listItemText: {
      marginLeft: 20,
    },
    sidebarItem: {
      cursor: "pointer",
      "&:hover": {
        background: theme.palette.info.main,
      },
    },
    sidebarItemAcitve: {
      background: theme.palette.info.main,
    },
    toolbar: {
      background: theme.palette.primary.main,
    },
    textToolbar: {
      color: "#fff",
    },
  }),
)
