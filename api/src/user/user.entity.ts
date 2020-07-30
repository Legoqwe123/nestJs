import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {
  @Column()
  user: string

  @Column()
  password: string

  @Column()
  status: string

  @PrimaryGeneratedColumn("uuid")
  id: string
}
