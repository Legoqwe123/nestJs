/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Injectable } from "@nestjs/common"
import { UserService } from "../user/user.service"
import { JwtService } from "@nestjs/jwt"

import { UserInput } from "../user/type/input.model"
import { UserLogoutType } from "./type/auth.model"

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUserAsync(
    user: UserInput,
  ): Promise<{ user: string; status: string; id: string } | null> {
    const account = await this.userService.findOneAsync(user)

    if (account && account.password === user.password) {
      const { password, ...result } = account
      return result
    }
    return null
  }

  async loginAsync(user: UserInput): Promise<{ token: string }> {
    const payload = { username: user.user, sub: user.password }
    return {
      token: this.jwtService.sign(payload),
    }
  }

  async logoutAsync({ id }): Promise<UserLogoutType> {
    const account = await this.userService.getUserByIdAsync(id)

    return { success: true }
  }
}
