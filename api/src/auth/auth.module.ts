import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { pubSub } from "../connection/sub"
import { AuthService } from "./auth.service"
import { PassportModule } from "@nestjs/passport"
import { JwtStrategy } from "./jwt.strategy"
import { AuthResolver } from "./auth.resolver"
import { UserService } from "../user/user.service"
import { User } from "../user/user.entity"
import { UserModule } from "../user/user.module"
import { JwtModule } from "@nestjs/jwt"
import { jwtConstants } from "./constants/constant"

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    UserModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "60s" },
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    AuthResolver,
    UserService,
    { provide: "PUB_SUB", useValue: pubSub },
  ],
  exports: [AuthService, PassportModule],
})
export class AuthModel {}
