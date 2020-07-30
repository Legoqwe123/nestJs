import React, { useContext } from "react"
import { useMutation } from "@apollo/client"
import { IconButton, SvgIcon } from "@material-ui/core"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"

import { AuthContext } from "../../context/auth-context"
import { LOGOUT_USER } from "../../core/query"

interface IconExitProps {
  classname: string
}

export const IconExitButton = ({
  classname,
}: IconExitProps): React.ReactElement => {
  const { storage, logout } = useContext(AuthContext)
  const [handelLogout] = useMutation(LOGOUT_USER)

  return (
    <IconButton
      onClick={() =>
        handelLogout({
          variables: {
            input: {
              id: storage.userId,
            },
          },
        })
          .then((_response) => logout())
          .catch((error) => {
            throw new Error(error)
          })
      }
    >
      <SvgIcon htmlColor="#fff" className={classname}>
        <ExitToAppIcon />
      </SvgIcon>
    </IconButton>
  )
}
