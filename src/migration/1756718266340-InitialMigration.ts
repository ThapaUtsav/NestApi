import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1756718266340 implements MigrationInterface {
  name = 'InitialMigration1756718266340';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "UserDetails" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_5dcb82aacc9a5256f29610285c7" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "UserDetails"`);
  }
}
