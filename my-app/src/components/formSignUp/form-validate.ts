import { FormMessageValidation } from "../../core/enums"
import { SignUpUser } from "../../core/types"

type Error = {
  password?: string
  user?: string
}

export const validate = (values: SignUpUser): Error | undefined => {
  const errors: Error = {}
  if (!values.user) {
    errors.user = FormMessageValidation.INPUT_REQUIRE
  } else if (values.user.length < 3) {
    errors.user = FormMessageValidation.USER_LENGTH
  }

  if (!values.password) {
    errors.password = FormMessageValidation.INPUT_REQUIRE
  } else if (values.password.length < 6) {
    errors.password = FormMessageValidation.PASSWORD_LENGTH
  }

  return errors
}
