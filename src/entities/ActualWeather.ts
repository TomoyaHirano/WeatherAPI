import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class ForecastWeather {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    year: number;

    @Column()
    month: number;

    @Column()
    day: number;

    @Column()
    hour: number;

    @Column()
    minute: number;

    @Column()
    place_id: number;

    @Column()
    rainfall: number;
}
