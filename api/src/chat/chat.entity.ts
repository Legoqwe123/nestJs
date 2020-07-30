import { PrimaryGeneratedColumn, Column, Entity } from "typeorm"

@Entity()
export class Chat {
  @PrimaryGeneratedColumn("uuid")
  chatId: string

  @Column()
  id: string

  @Column()
  idRecipient: string

  @Column("text", { array: true })
  to: string[]

  @Column("text", { array: true })
  from: string[]
}
