import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { Chat } from "./chat.entity"
import { ChatService } from "./chat.service"
import { ChatResolver } from "./chat.resolver"
import { pubSub } from "../connection/sub"

@Module({
  imports: [TypeOrmModule.forFeature([Chat])],
  providers: [
    ChatService,
    ChatResolver,
    { provide: "PUB_SUB", useValue: pubSub },
  ],
  exports: [],
})
export class ChatModule {}
