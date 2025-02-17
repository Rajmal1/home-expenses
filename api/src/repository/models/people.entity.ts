import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ExpensesEntity } from './expenses.entity';

@Entity()
export class PeopleEntity {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'Name' })
  name: string;

  @Column({ name: 'Age' })
  age: number;

  @OneToMany(() => ExpensesEntity, (expenses) => expenses.personId)
  expenses: ExpensesEntity[];
}
