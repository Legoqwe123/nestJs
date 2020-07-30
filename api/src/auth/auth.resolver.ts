/* eslint-disable no-restricted-syntax */
import { Resolver, Args, Mutation, Subscription } from "@nestjs/graphql"
import { Inject } from "@nestjs/common"
import { PubSub } from "graphql-subscriptions"

import {
  UserAuthorizationType,
  UserLogoutInput,
  UserLogoutType,
} from "./type/auth.model"
import { UserInput } from "../user/type/input.model"
import { UserService } from "../user/user.service"
import { AuthService } from "../auth/auth.service"
import { UserType, AllUsersType } from "../user/type/user.model"

@Resolver()
export class AuthResolver {
  constructor(
    @Inject("PUB_SUB")
    private pubSub: PubSub,
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Mutation((_returns) => UserAuthorizationType)
  async signIn(
    @Args("input") input: UserInput,
  ): Promise<UserAuthorizationType> {
    const { user, id } = await this.userService.findOneAsync(input)
    const { token } = await this.authService.loginAsync(input)

    await this.userService.changeStatusAsync(input, "ONLINE")

    const usersInfo = await this.userService.getAllUsersAsync()

    this.pubSub.publish("signInUser", { signInUser: usersInfo })

    return { user, token, id }
  }

  @Mutation((_returns) => UserLogoutType)
  async signOut(
    @Args("input") input: UserLogoutInput,
  ): Promise<UserLogoutType> {
    const account = await this.userService.getUserByIdAsync(input.id)

    await this.userService.changeStatusAsync(account, "OFFLINE")

    const usersInfo = await this.userService.getAllUsersAsync()

    this.pubSub.publish("signInUser", { signInUser: usersInfo })

    return this.authService.logoutAsync(input)
  }

  @Mutation((_returns) => UserType)
  signUp(@Args("input") input: UserInput): Promise<UserInput | string> {
    return this.userService.createUserAsync(input)
  }

  @Subscription((_returns) => [AllUsersType], {
    filter: (payload, variables) => {
      return payload.signInUser.title === variables.title
    },
  })
  signInUser(): AsyncIterator<unknown, any, undefined> {
    return this.pubSub.asyncIterator("signInUser")
  }
}
