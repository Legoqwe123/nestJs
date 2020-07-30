export type chatInfo = {
  idRecipient: string
  to: {
    messages: [message] | []
  }
  from: {
    messages: [message] | []
  }
}

export type message = {
  date: Date
  message: string
}

export type Chats = [chatInfo]
