import { Injectable, ForbiddenException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { User } from "./user.entity"
import { UserInput } from "./type/input.model"

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  async getUserByIdAsync(id: string): Promise<User> {
    const user = await this.UserRepository.findOne(id)

    return user
  }

  async createUserAsync(username: UserInput): Promise<User | string> {
    if (!(await this.UserRepository.findOne({ user: username.user }))) {
      const account = this.UserRepository.create({
        user: username.user,
        password: username.password,
        status: "OFFLINE",
      })

      return await this.UserRepository.save(account)
    } else {
      throw new ForbiddenException("Пользователь с таким именем уже существует")
    }
  }

  async getAllUsersAsync(): Promise<any> {
    return await this.UserRepository.find()
  }

  async changeStatusAsync(
    username: UserInput,
    status: "OFFLINE" | "ONLINE",
  ): Promise<User> {
    const account = await this.findOneAsync(username)
    account.status = status

    return await this.UserRepository.save(account)
  }

  async findOneAsync(username: UserInput): Promise<User | undefined> {
    const account = await this.UserRepository.findOne({ user: username.user })

    if (!account) {
      throw new ForbiddenException("Пользователь с таким именем не существует")
    }

    if (
      account.user === username.user &&
      account.password !== username.password
    ) {
      throw new ForbiddenException("Введен неверный пароль")
    }

    return account
  }
}
