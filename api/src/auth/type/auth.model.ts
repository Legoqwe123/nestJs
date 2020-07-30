import { Field, ObjectType, ID, InputType } from "@nestjs/graphql"

@ObjectType("UserAuthorizationType")
export class UserAuthorizationType {
  @Field()
  user: string

  @Field((_type) => ID)
  id: string

  @Field((_type) => ID)
  token: string
}

@InputType("UserLogoutInput")
export class UserLogoutInput {
  @Field((_type) => ID)
  id: string
}

@ObjectType("UserLogoutType")
export class UserLogoutType {
  @Field()
  success: boolean
}
