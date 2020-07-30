import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { Chat } from "./chat.entity"

type InputCreateChat = {
  id: string
  idRecipient: string
}

type InputSendMessage = {
  id: string
  idRecipient: string
  message: string
}

interface Messages {
  to: string[]
  from: string[]
}

interface InfoMessage {
  role: string
  time: number
  message: string
}

type ListMessages = {
  messages: InfoMessage[]
  idRecipient: string
}

const parseMessage = (messages: string[], role: string) => {
  return messages.map((item) => {
    const arrMessage = item.split(" ")

    return {
      message: arrMessage
        .slice(0, arrMessage.length - 1)
        .join(" ")
        .trim(),
      time: +arrMessage[arrMessage.length - 1]
        .match(/\d/g)
        .join("")
        .trim(),
      role,
    }
  })
}

const megreMessages = (data: Messages): InfoMessage[] => {
  const { to, from } = data

  const toMessages = parseMessage(to, "sender")
  const fromMessages = parseMessage(from, "recipient")

  const messages = [...toMessages, ...fromMessages].sort(
    (a, b) => a.time - b.time,
  )

  return messages
}

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat) private chatRepository: Repository<Chat>,
  ) {}

  async createChatAsync(input: InputCreateChat): Promise<Chat> {
    const chat = new Chat()

    chat.id = input.id
    chat.idRecipient = input.idRecipient
    chat.to = []
    chat.from = []

    return await this.chatRepository.save(chat)
  }

  async getChatByIdAsync(input: InputCreateChat): Promise<Chat> {
    const chat = await this.chatRepository.findOne({
      id: input.id,
      idRecipient: input.idRecipient,
    })

    return chat
  }

  async sendMessageAsync(input: InputSendMessage): Promise<Chat> {
    if (
      await this.getChatByIdAsync({
        id: input.id,
        idRecipient: input.idRecipient,
      })
    ) {
      const chatSender = await this.getChatByIdAsync({
        id: input.id,
        idRecipient: input.idRecipient,
      })
      const chatRecipient = await this.getChatByIdAsync({
        id: input.idRecipient,
        idRecipient: input.id,
      })

      chatSender.to.push(input.message.trim() + " time:" + Date.now())
      chatRecipient.from.push(input.message.trim() + " time:" + Date.now())
      ;(await this.chatRepository.save(chatSender)) &&
        (await this.chatRepository.save(chatRecipient))

      return chatSender
    }

    const createChatSender = await this.createChatAsync({
      id: input.id,
      idRecipient: input.idRecipient,
    })
    const createChatRecipient = await this.createChatAsync({
      id: input.idRecipient,
      idRecipient: input.id,
    })

    createChatSender.to.push(input.message.trim() + " time:" + Date.now())
    createChatRecipient.from.push(input.message.trim() + " time:" + Date.now())
    ;(await this.chatRepository.save(createChatSender)) &&
      (await this.chatRepository.save(createChatRecipient))

    return createChatSender
  }

  async getAllMessagesAsync(input: InputCreateChat): Promise<ListMessages> {
    if (
      await this.getChatByIdAsync({
        id: input.id,
        idRecipient: input.idRecipient,
      })
    ) {
      const data = await this.chatRepository.findOne({
        id: input.id,
        idRecipient: input.idRecipient,
      })

      return { messages: megreMessages(data), idRecipient: input.idRecipient }
    }
  }
}
