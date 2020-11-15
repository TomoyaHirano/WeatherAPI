import { Factory, Seeder } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import Place from '../entities/Place'

/**
 * FIXME
 * - Populate the database with users defined in `src/seeds/users.json` 
 * 
 * Tip!
 * - Consult the documentation listed in **Refs** above
 */
export default class CreatePlace implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        const fs = require('fs');
        const jsonObject = JSON.parse(fs.readFileSync('src/seeds/place.json', 'utf8'));
        await connection
        .createQueryBuilder()
        .insert()
        .into(Place)
        .values(jsonObject)
        .execute()          
    }
}
