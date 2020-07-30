import { InputType, Field, ID } from "@nestjs/graphql"

@InputType("UserInput")
export class UserInput {
  @Field((_type) => ID)
  user: string
  @Field()
  password: string
}
