import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany
} from 'typeorm';
import { Flavor } from './flavor.entity';
// entity represents the relationship between a typescript class and a db table
// you can type the db name in the entity, but classname Coffee will make a coffee table

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  // relations are not egerlly loaded by default, so you must specify relations in coffees.service
  @JoinTable() // this is only needed in the ower of the property
  @ManyToMany(
    type => Flavor,
    (flavor) => flavor.coffees,
    {
      cascade: true // ['insert new flavors automatically']
    }
  )
  flavors: Flavor[];
}