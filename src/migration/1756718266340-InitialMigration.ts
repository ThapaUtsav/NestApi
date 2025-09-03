import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1756718266340 implements MigrationInterface {
  name = 'InitialMigration1756718266340';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "UserDetails" (
         "id" SERIAL NOT NULL,
         "email" character varying NOT NULL,
         "password" character varying NOT NULL,
         CONSTRAINT "PK_UserDetails_id" PRIMARY KEY ("id")
       )`,
    );
    await queryRunner.query(
      `CREATE TABLE "Projects" (
         "id" SERIAL NOT NULL,
         "name" character varying NOT NULL,
         "description" text NOT NULL,
         "userId" integer NOT NULL,
         CONSTRAINT "FK_Projects_userId" FOREIGN KEY ("userId") REFERENCES "UserDetails"("id") ON DELETE CASCADE,
         CONSTRAINT "PK_Projects_id" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Projects"`);
    await queryRunner.query(`DROP TABLE "UserDetails"`);
  }
}
