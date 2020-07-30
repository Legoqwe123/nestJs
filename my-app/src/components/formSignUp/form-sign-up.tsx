import React, { useState, SetStateAction, Dispatch } from "react"
import { useMutation, ApolloError } from "@apollo/client"
import { useFormik } from "formik"
import {
  TextField,
  Button,
  InputLabel,
  Snackbar,
  Typography,
} from "@material-ui/core"
import VpnKeyIcon from "@material-ui/icons/VpnKey"
import MuiAlert from "@material-ui/lab/Alert"

import { FormMessageSucces } from "../../core/enums"
import { REGISTRATION_USER } from "../../core/query"
import { SignUpUser } from "../../core/types"
import { validate } from "./form-validate"

interface Props {
  classes: Record<
    | "form"
    | "message"
    | "button"
    | "root"
    | "icon"
    | "wrapper"
    | "inputLogin"
    | "inputPassword",
    string
  >
  handleTab: Dispatch<SetStateAction<number>>
}

export const FormSignUp = ({
  classes,
  handleTab,
}: Props): React.ReactElement => {
  const [handleSumbit] = useMutation(REGISTRATION_USER)

  const [open, setOpen] = useState(false)

  const [errorMessage, setError] = useState<
    // eslint-disable-next-line @typescript-eslint/ban-types
    ApolloError | ""
  >()

  const formik = useFormik<SignUpUser>({
    initialValues: {
      user: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      handleSumbit({
        variables: {
          input: { ...values },
        },
      })
        .then((response) => {
          formik.values.password = ""
          formik.values.user = ""

          setTimeout(() => {
            handleTab(0)
          }, 1000)

          setError("")
          setOpen(true)

          return response
        })
        .catch((error) => {
          setOpen(true)
          setError(error)
        })
    },
  })

  return (
    <>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Typography variant="h6" align="center">
          Регистрация
        </Typography>
        <div className={classes.wrapper}>
          <VpnKeyIcon className={classes.icon} />
        </div>
        <TextField
          id="user"
          label="Никнейм"
          variant="outlined"
          className={classes.inputLogin}
          name="user"
          type="text"
          value={formik.values.user}
          onChange={formik.handleChange}
        />
        <InputLabel shrink={true} error={true}>
          {formik.errors.user ? formik.errors.user : null}
        </InputLabel>
        <TextField
          id="password"
          label="Пароль"
          type="password"
          variant="outlined"
          className={classes.inputPassword}
          name="password"
          value={formik.values.password}
          autoComplete="no"
          onChange={formik.handleChange}
        />
        <InputLabel error={true} shrink={true}>
          {formik.errors.password ? formik.errors.password : null}
        </InputLabel>

        <Snackbar
          autoHideDuration={1000}
          open={open}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          onClose={(): void => setOpen(false)}
        >
          <MuiAlert
            severity={errorMessage ? "error" : "success"}
            elevation={6}
            variant="filled"
          >
            {errorMessage
              ? errorMessage.message
              : FormMessageSucces.USER_REGISTERED}
          </MuiAlert>
        </Snackbar>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type="submit"
        >
          Зарегистрироваться
        </Button>
      </form>
    </>
  )
}
