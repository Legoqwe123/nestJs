import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1595946201862 implements MigrationInterface {
    name = 'initial1595946201862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "chat" ("id" character varying NOT NULL, "chat" text array NOT NULL, CONSTRAINT "PK_9d0b2ba74336710fd31154738a5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "chat"`);
    }

}
