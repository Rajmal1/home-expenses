import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleEntity } from './models/people.entity';
import { PeopleRepository } from './people.repository';
import { ExpensesEntity } from './models/expenses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PeopleEntity, ExpensesEntity])],
  providers: [PeopleRepository, ExpensesEntity],
  exports: [PeopleRepository, ExpensesEntity],
})
export class RepositoryModule {}
