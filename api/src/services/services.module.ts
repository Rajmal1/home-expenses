import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { RepositoryModule } from 'src/repository/repository.module';
import { ExpensesService } from './expenses.service';

@Module({
  imports: [RepositoryModule],
  providers: [RepositoryModule],
  exports: [PeopleService, ExpensesService],
})
export class ServicesModule {}
