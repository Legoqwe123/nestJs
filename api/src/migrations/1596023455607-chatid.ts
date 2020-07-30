import {MigrationInterface, QueryRunner} from "typeorm";

export class chatid1596023455607 implements MigrationInterface {
    name = 'chatid1596023455607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chat" ADD "chatId" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "chat" DROP CONSTRAINT "PK_9d0b2ba74336710fd31154738a5"`);
        await queryRunner.query(`ALTER TABLE "chat" ADD CONSTRAINT "PK_6ae4017a89f17c982118c836d6c" PRIMARY KEY ("id", "chatId")`);
        await queryRunner.query(`ALTER TABLE "chat" DROP CONSTRAINT "PK_6ae4017a89f17c982118c836d6c"`);
        await queryRunner.query(`ALTER TABLE "chat" ADD CONSTRAINT "PK_3af41a2b44ec75589b7213a05e2" PRIMARY KEY ("chatId")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chat" DROP CONSTRAINT "PK_3af41a2b44ec75589b7213a05e2"`);
        await queryRunner.query(`ALTER TABLE "chat" ADD CONSTRAINT "PK_6ae4017a89f17c982118c836d6c" PRIMARY KEY ("id", "chatId")`);
        await queryRunner.query(`ALTER TABLE "chat" DROP CONSTRAINT "PK_6ae4017a89f17c982118c836d6c"`);
        await queryRunner.query(`ALTER TABLE "chat" ADD CONSTRAINT "PK_9d0b2ba74336710fd31154738a5" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "chat" DROP COLUMN "chatId"`);
    }

}
