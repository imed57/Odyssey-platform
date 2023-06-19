import { Entity, Column, PrimaryGeneratedColumn, Decimal128 } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: string;

  @Column()
  image: string;

  @Column()
  link: string;

  @Column()
  price: string;

}
