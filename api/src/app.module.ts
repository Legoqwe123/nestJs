import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { TypeOrmModule } from "@nestjs/typeorm"

import * as ormconfig from "./config/typeorm.config"

import { UserModule } from "./user/user.module"
import { AuthModel } from "./auth/auth.module"
import { ChatModule } from "./chat/chat.module"

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
    }),
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    AuthModel,
    ChatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
