import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/development.db',
      autoLoadEntities: true,
    }),
  ],
})
export class DatabaseModule {}
