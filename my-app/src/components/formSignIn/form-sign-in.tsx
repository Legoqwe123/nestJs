import React, { useState, useContext } from "react"
import { useMutation, ApolloError } from "@apollo/client"

import { useFormik } from "formik"
import {
  TextField,
  Typography,
  Button,
  InputLabel,
  Snackbar,
} from "@material-ui/core"
import FaceIcon from "@material-ui/icons/Face"
import MuiAlert from "@material-ui/lab/Alert"

import { AuthContext } from "../../context/auth-context"
import { FormMessageSucces } from "../../core/enums"
import { AUTH_USER } from "../../core/query"
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
}

export const FormSignInWith = ({ classes }: Props): React.ReactElement => {
  const [handleSumbit] = useMutation(AUTH_USER)

  const { login } = useContext(AuthContext)

  const [open, setOpen] = useState<boolean>(false)

  // eslint-disable-next-line prefer-const

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
          const { token, id } = response.data.signIn

          formik.values.password = ""
          formik.values.user = ""

          setError("")
          setOpen(true)

          setTimeout(() => {
            login(token, id)
          }, 500)

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
          Войти в аккаунт
        </Typography>
        <div className={classes.wrapper}>
          <FaceIcon className={classes.icon} />
        </div>
        <TextField
          id="user"
          label="Логин"
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
            {errorMessage ? errorMessage.message : FormMessageSucces.USER_AUTH}
          </MuiAlert>
        </Snackbar>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type="submit"
        >
          Авторизоваться
        </Button>
      </form>
    </>
  )
}
