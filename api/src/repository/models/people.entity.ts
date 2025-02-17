import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PeopleEntity {
  @PrimaryGeneratedColumn({ name: 'Id' })
  id: number;

  @Column({ name: 'Name' })
  name: string;

  @Column({ name: 'Age' })
  age: number;
}
