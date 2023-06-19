import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Ticket } from './Ticket';
import { User } from './User';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  loanDate: string;

  @OneToOne(() => Ticket)
  @JoinColumn({ name: 'book_id' }) 
  book: Ticket;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
