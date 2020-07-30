import { Field, ObjectType } from "@nestjs/graphql"

import { Chat } from "../chat.entity"

@ObjectType("ChatType")
export class ChatType {
  @Field()
  Chat: Chat
}

@ObjectType("ChatCreateType")
export class ChatCreateType {
  @Field()
  idRecipient: string
}

@ObjectType("Message")
export class Message {
  @Field()
  message: string

  @Field()
  time: number

  @Field()
  role: string
}

@ObjectType("getMessagesType")
export class getMessagesType {
  @Field((): [typeof Message] => [Message])
  messages: Message[]
}

@ObjectType("getMessagesSbscr")
export class getMessagesSbscr {
  @Field((): [typeof Message] => [Message])
  messages: Message[]

  @Field()
  idRecipient: string
}
