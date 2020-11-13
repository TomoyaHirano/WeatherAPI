import {MigrationInterface, QueryRunner} from "typeorm";

export class test1605251361956 implements MigrationInterface {
    name = 'test1605251361956'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "forecast_weather" ("id" SERIAL NOT NULL, "year" integer NOT NULL, "month" integer NOT NULL, "day" integer NOT NULL, "hour" integer NOT NULL, "minute" integer NOT NULL, "place_id" integer NOT NULL, "rainfall" integer NOT NULL, CONSTRAINT "PK_9372baf585bf524f1f8e32947a2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "forecast_weather"`);
    }

}
