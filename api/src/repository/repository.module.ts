import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleEntity } from './models/people.entity';
import { PeopleRepository } from './people.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PeopleEntity])],
  providers: [PeopleRepository],
  exports: [PeopleRepository],
})
export class RepositoryModule {}
