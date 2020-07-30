import React, {
  useContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react"
import { useSubscription, useQuery } from "@apollo/client"
import { List } from "@material-ui/core"

import { useStyles } from "../chat-style"
import { AuthContext } from "../../../context/auth-context"
import { ChatSidebarItem } from "../chat-sidebar-item/chat-sidebar-item"
import { SUBSCRIPTION_USER_SIGNIN, GET_ALL_USERS } from "../../../core/query"
import { SignInUser, AllUsersInfo, UserInfo } from "../../../core/types"

interface Props {
  handleId: Dispatch<SetStateAction<string>>
}

export const ChatSidebarList = ({ handleId }: Props): React.ReactElement => {
  const { data, loading } = useSubscription<SignInUser | undefined>(
    SUBSCRIPTION_USER_SIGNIN,
  )
  const { data: dataInfo, loading: initialLoading } = useQuery<
    AllUsersInfo | undefined
  >(GET_ALL_USERS)

  const classes = useStyles()

  const [usersList, setUsersList] = useState<null | [UserInfo]>(null)

  const handleChangeId = (id: string): void => {
    handleId(id)
  }

  const {
    storage: { userId },
  } = useContext(AuthContext)

  useEffect(() => {
    if (!initialLoading && dataInfo) {
      setUsersList(dataInfo.getAllUsersInfo)
    }
  }, [initialLoading, dataInfo])

  useEffect(() => {
    if (!loading && data) {
      setUsersList(data.signInUser)
    }
  }, [loading, data])

  return (
    <List className={classes.sidebarList}>
      {userId &&
        usersList !== null &&
        usersList
          .filter((item) => item.id !== userId)
          .map((item) => {
            return (
              <ChatSidebarItem
                userId={userId}
                users={item.user}
                id={item.id}
                key={item.id}
                status={item.status}
                handle={() => handleChangeId(item.id)}
              />
            )
          })}
    </List>
  )
}
