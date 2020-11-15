import {MigrationInterface, QueryRunner} from "typeorm";

export class test1605440647406 implements MigrationInterface {
    name = 'test1605440647406'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "actual_weather" ("id" SERIAL NOT NULL, "year" integer NOT NULL, "month" integer NOT NULL, "day" integer NOT NULL, "hour" integer NOT NULL, "minute" integer NOT NULL, "place_id" integer NOT NULL, "rainfall" integer NOT NULL, CONSTRAINT "PK_4353dc9d75d7ebc26d6db7f146a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "forecast_weather" ("id" SERIAL NOT NULL, "year" integer NOT NULL, "month" integer NOT NULL, "day" integer NOT NULL, "hour" integer NOT NULL, "minute" integer NOT NULL, "place_id" integer NOT NULL, "rainfall" integer NOT NULL, CONSTRAINT "PK_9372baf585bf524f1f8e32947a2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "place" ("id" SERIAL NOT NULL, "areaName" character varying NOT NULL, "placeName" character varying NOT NULL, CONSTRAINT "PK_96ab91d43aa89c5de1b59ee7cca" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "place"`);
        await queryRunner.query(`DROP TABLE "forecast_weather"`);
        await queryRunner.query(`DROP TABLE "actual_weather"`);
    }

}
