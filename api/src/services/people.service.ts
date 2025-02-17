import { Injectable } from '@nestjs/common';
import { PeopleEntity } from 'src/repository/models/people.entity';
import { PeopleRepository } from 'src/repository/people.repository';
import { Person } from 'src/shared/types/person.type';

@Injectable()
export class PeopleService {
  constructor(private readonly peopleRepository: PeopleRepository) {}

  async findAll(): Promise<PeopleEntity[]> {
    return this.peopleRepository.findAll();
  }

  async findOne(id: number): Promise<PeopleEntity> {
    return this.findOne(id);
  }

  async insertOrUpdateOne(person: Person): Promise<PeopleEntity> {
    return this.peopleRepository.insertOrUpdateOne(person);
  }

  async deleteOne(id: number): Promise<PeopleEntity> {
    return this.peopleRepository.deleteOne(id);
  }
}
