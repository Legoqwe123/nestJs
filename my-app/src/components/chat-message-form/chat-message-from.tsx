import React, { useContext } from "react"
import { useMutation } from "@apollo/client"
import { useFormik } from "formik"
import { IconButton, TextareaAutosize, Box } from "@material-ui/core"

import { SEND_MESSAGE_CHAT } from "../../core/query"
import { AuthContext } from "../../context/auth-context"

import EmailIcon from "@material-ui/icons/Email"

interface Props {
  classes: Record<"toolbar" | "textArea" | "form", string>
  id: string
}

interface FormChat {
  message: string
}

type Error = {
  message?: string
}

export const validate = (values: Error): Error | undefined => {
  const errors: { message?: string } = {}

  if (!values.message) {
    errors.message = "Введите сообщение"
  }

  return errors
}

export const ChatMessageForm = ({ classes, id }: Props): React.ReactElement => {
  const [handleSubmit] = useMutation(SEND_MESSAGE_CHAT, {
    fetchPolicy: "no-cache",
  })

  const {
    storage: { userId },
  } = useContext(AuthContext)

  const formik = useFormik<FormChat>({
    initialValues: {
      message: "",
    },
    validate,
    onSubmit: (values) => {
      handleSubmit({
        variables: {
          input: { id: userId, message: values.message, idRecipient: id },
        },
      })

      formik.values.message = ""
    },
  })

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      className={classes.form}
    >
      <Box flexBasis="85%">
        <TextareaAutosize
          rows={10}
          id="message"
          aria-label="empty textarea"
          placeholder="Введите сообщение"
          name="message"
          className={classes.textArea}
          value={formik.values.message}
          onChange={formik.handleChange}
        />
      </Box>
      <Box>
        <IconButton type="submit">
          <EmailIcon color="primary" fontSize="large" />
        </IconButton>
      </Box>
    </form>
  )
}
