import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleEntity } from 'src/repository/models/people.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/development.db',
      entities: [PeopleEntity],
    }),
  ],
})
export class DatabaseModule {}
