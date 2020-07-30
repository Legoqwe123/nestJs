import { Strategy, ExtractJwt } from "passport-jwt"
import { PassportStrategy } from "@nestjs/passport"
import { Injectable, UnauthorizedException } from "@nestjs/common"

import { jwtConstants } from "./constants/constant"

import { UserInput } from "../user/type/input.model"
import { UserService } from "../user/user.service"

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      secretOrKey: jwtConstants.secret,
    })
  }

  async validateAsync(payload: UserInput): Promise<UserInput> {
    const user = await this.userService.findOneAsync(payload)

    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
}
