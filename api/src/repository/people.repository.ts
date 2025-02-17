import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PeopleEntity } from './models/people.entity';
import { Repository } from 'typeorm';
import { Person } from 'src/shared/types/person.type';

@Injectable()
export class PeopleRepository {
  constructor(
    @InjectRepository(PeopleEntity)
    private readonly peopleRepository: Repository<PeopleEntity>,
  ) {}

  async findAll(): Promise<PeopleEntity[]> {
    return this.peopleRepository.find({ relations: ['expenses'] });
  }

  async findOne(id: number): Promise<PeopleEntity | null> {
    return this.peopleRepository.findOne({
      relations: ['expenses'],
      where: { id },
    });
  }

  async insertOrUpdateOne(person: Person): Promise<PeopleEntity> {
    const newPerson = await this.peopleRepository.upsert(person, {
      conflictPaths: ['name'],
      skipUpdateIfNoValuesChanged: true,
      upsertType: 'on-conflict-do-update',
    });

    return newPerson.raw as PeopleEntity;
  }

  async deleteOne(id: number): Promise<PeopleEntity> {
    const deleted = await this.peopleRepository.delete({ id });

    return deleted.raw as PeopleEntity;
  }
}
