import { Module } from '@nestjs/common';
import { PeopleRepository } from 'src/repository/people.repository';
import { PeopleService } from './people.service';

@Module({
  imports: [PeopleRepository],
  providers: [PeopleRepository],
  exports: [PeopleService],
})
export class ServicesModule {}
