import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Place {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    areaName: string;

    @Column()
    placeName: string;

}

export default Place;