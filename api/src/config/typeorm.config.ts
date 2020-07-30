import { ConnectionOptions } from "typeorm"

const typeOrmConfig: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "chat",
  password: "chat",
  database: "db_chat",
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: false,
  logging: true,
  migrations: ["dist/migrations/*.js"],
  migrationsRun: true,
  cli: {
    migrationsDir: "src/migrations",
  },
}

export = typeOrmConfig
