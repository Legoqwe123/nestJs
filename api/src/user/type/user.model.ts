import { Field, ObjectType, ID } from "@nestjs/graphql"

@ObjectType("User")
export class UserType {
  @Field()
  user: string

  @Field((_type) => ID)
  id: string
}

@ObjectType("AllUsersType")
export class AllUsersType {
  @Field()
  user: string

  @Field()
  status: string

  @Field((_type) => ID)
  id: string
}
