import React from "react"
import { makeStyles, createStyles } from "@material-ui/core"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import LockOpenIcon from "@material-ui/icons/LockOpen"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    alert: {
      background: "#fff",
      width: 400,
      height: 400,
      borderRadius: 10,
    },
    alertWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: "inherit",
    },
    timer: {
      border: "1px solid",
      borderRadius: 20,
      padding: "10px 15px",
    },
  }),
)

interface Props {
  open: boolean
  timer: number
}

export const ModalAuthorization = ({
  open,
  timer,
}: Props): React.ReactElement => {
  const classes = useStyles()

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      className={classes.root}
    >
      <div className={classes.alert}>
        <div className={classes.alertWrapper}>
          <LockOpenIcon fontSize={"large"} />
          <p>Вы будете переведены на страницу чата через</p>
          <div className={classes.timer}>{timer}</div>
        </div>
      </div>
    </Modal>
  )
}
