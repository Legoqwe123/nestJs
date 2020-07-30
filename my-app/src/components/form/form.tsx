import React, { useState } from "react"
import { Container } from "@material-ui/core"

import { TabForm } from "../tab-form/tab-form"
import { FormSignUp } from "../formSignUp/form-sign-up"
import { FormSignInWith } from "../formSignIn/form-sign-in"

import { useStyles } from "./form-style"

export const Form = (): React.ReactElement => {
  const classes = useStyles()

  const [value, setValue] = useState<number>(0)

  return (
    <Container className={classes.root}>
      <div className={classes.container}>
        <TabForm value={value} setForm={setValue} />

        {value ? (
          <FormSignUp classes={classes} handleTab={setValue} />
        ) : (
          <FormSignInWith classes={classes} />
        )}
      </div>
    </Container>
  )
}
