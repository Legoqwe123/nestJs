import { Module } from "@nestjs/common"

import { pubSub } from "../connection/sub"
import { UserResolver } from "./user.resolver"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./user.entity"
import { UserService } from "./user.service"

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UserResolver,
    UserService,
    { provide: "PUB_SUB", useValue: pubSub },
  ],
  exports: [],
})
export class UserModule {}
