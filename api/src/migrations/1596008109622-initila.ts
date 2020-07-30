import {MigrationInterface, QueryRunner} from "typeorm";

export class initila1596008109622 implements MigrationInterface {
    name = 'initila1596008109622'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chat" DROP COLUMN "chat"`);
        await queryRunner.query(`ALTER TABLE "chat" ADD "idRecipient" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chat" ADD "to" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chat" ADD "from" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chat" DROP COLUMN "from"`);
        await queryRunner.query(`ALTER TABLE "chat" DROP COLUMN "to"`);
        await queryRunner.query(`ALTER TABLE "chat" DROP COLUMN "idRecipient"`);
        await queryRunner.query(`ALTER TABLE "chat" ADD "chat" text array NOT NULL`);
    }

}
