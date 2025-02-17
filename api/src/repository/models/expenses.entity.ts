import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PeopleEntity } from './people.entity';

@Entity()
export class ExpensesEntity {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'Description' })
  description: string;

  @Column({ name: 'Value' })
  value: number;

  @Column({ name: 'Description' })
  type: string;

  @Column({ name: 'PersonId' })
  personId: number;

  @ManyToOne(() => PeopleEntity, (person) => person.id)
  person: PeopleEntity;
}
