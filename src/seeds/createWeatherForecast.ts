import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import ForecastWeather from '../entities/ForecastWeather'

/**
 * FIXME
 * - Populate the database with users defined in `src/seeds/users.json` 
 * 
 * Tip!
 * - Consult the documentation listed in **Refs** above
 */
export default class CreateForecastWeather implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const fs = require('fs');
        const jsonObject = JSON.parse(fs.readFileSync('src/seeds/weatherforecast.json', 'utf8'));
        await connection
        .createQueryBuilder()
        .insert()
        .into(ForecastWeather)
        .values(jsonObject)
        .execute()          
    }
}
