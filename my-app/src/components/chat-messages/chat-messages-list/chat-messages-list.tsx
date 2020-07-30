import React, { useContext, useState, useEffect } from "react"
import { Box } from "@material-ui/core"
import { useQuery, useSubscription } from "@apollo/client"

import { GET_ALL_MESSAGES, GET_MESSAGE_SUBSCRIBE } from "../../../core/query"
import { ChatMessageItem } from "../chat-message-item/chat-message-item"
import { AuthContext } from "../../../context/auth-context"
import { useStyles } from "../chat-messages-style"

interface Props {
  id: string
}

interface MessageInfo {
  role: "sender" | "recipient"
  message: string
  time: number
}
type MessageList = [MessageInfo]

export const ChatMessagesList = ({ id }: Props): React.ReactElement => {
  const classes = useStyles()

  const {
    storage: { userId },
  } = useContext(AuthContext)

  const { data: dataMessage } = useSubscription(GET_MESSAGE_SUBSCRIBE, {
    fetchPolicy: "network-only",
  })

  const { data } = useQuery(GET_ALL_MESSAGES, {
    variables: { input: { idRecipient: id, id: userId } },
    fetchPolicy: "network-only",
  })

  const [list, setList] = useState<MessageList | null>(null)

  useEffect(() => {
    if (dataMessage) {
      const { getMessagesSubscribe } = dataMessage

      const messages = getMessagesSubscribe.messages
      const idRecipient = getMessagesSubscribe.idRecipient

      const reverseRoleMessages =
        idRecipient !== userId
          ? messages
          : messages.map((item: MessageInfo) => {
              if (item.role === "sender") {
                item.role = "recipient"
                return item
              }
              item.role = "sender"
              return item
            })

      setList(reverseRoleMessages)
    }

    if (!id) {
      setList(null)
    }
  }, [dataMessage])

  useEffect(() => {
    if (data) {
      setList(data.getAllMessages.messages)
    } else {
      setList(null)
    }
  }, [data])

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="inherit"
      overflow="auto"
      className={classes.messagesList}
    >
      {list ? (
        list.map((item, index) => <ChatMessageItem key={index} {...item} />)
      ) : (
        <div>Напишите, чтобы начать общение</div>
      )}
    </Box>
  )
}
