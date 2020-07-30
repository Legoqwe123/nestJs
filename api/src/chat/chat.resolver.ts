/* eslint-disable no-restricted-syntax */
import { Resolver, Args, Mutation, Query, Subscription } from "@nestjs/graphql"
import { Inject } from "@nestjs/common"
import { PubSub } from "graphql-subscriptions"

import { sendMessageInput, getMessageInput } from "./type/input.model"
import {
  ChatCreateType,
  getMessagesType,
  getMessagesSbscr,
} from "./type/chat.model"
import { ChatService } from "./chat.service"
import { Chat } from "./chat.entity"

@Resolver()
export class ChatResolver {
  constructor(
    private chatService: ChatService,
    @Inject("PUB_SUB") private pubSub: PubSub,
  ) {}

  @Mutation(() => ChatCreateType)
  async sendMessage(@Args("input") input: sendMessageInput): Promise<Chat> {
    const sendMessage = await this.chatService.sendMessageAsync(input)

    const messages = await this.chatService.getAllMessagesAsync(input)

    this.pubSub.publish("getMessagesSubscribe", {
      getMessagesSubscribe: messages,
    })

    return sendMessage
  }

  @Query(() => getMessagesType)
  async getAllMessages(
    @Args("input") input: getMessageInput,
  ): Promise<getMessagesType> {
    return await this.chatService.getAllMessagesAsync(input)
  }

  @Subscription(() => getMessagesSbscr)
  getMessagesSubscribe(): AsyncIterator<unknown, any, undefined> {
    return this.pubSub.asyncIterator("getMessagesSubscribe")
  }
}
