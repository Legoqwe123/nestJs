/* eslint-disable no-restricted-syntax */
import { Resolver, Query, Args } from "@nestjs/graphql"

import { UserType, AllUsersType } from "./type/user.model"

import { UserService } from "./user.service"

interface User {
  user: string
  id: string
  status: string
}

@Resolver((_of) => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((_returns) => UserType)
  async getUserInfo(@Args("id") id: string): Promise<User> {
    return await this.userService.getUserByIdAsync(id)
  }

  @Query((_return) => [AllUsersType])
  async getAllUsersInfo(): Promise<[AllUsersType]> {
    return await this.userService.getAllUsersAsync()
  }
}
