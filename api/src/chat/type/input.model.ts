import { InputType, Field } from "@nestjs/graphql"

@InputType("sendMessageInput")
export class sendMessageInput {
  @Field()
  id: string

  @Field()
  idRecipient: string

  @Field()
  message: string
}

@InputType("getMessageInput")
export class getMessageInput {
  @Field()
  idRecipient: string

  @Field()
  id: string
}
