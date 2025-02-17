import { Injectable } from '@nestjs/common';
import { ExpensesRepository } from 'src/repository/expenses.repository';
import { ExpensesEntity } from 'src/repository/models/expenses.entity';
import { Expense } from 'src/shared/types/expenses.type';

@Injectable()
export class ExpensesService {
  constructor(private readonly expensesRepository: ExpensesRepository) {}

  async insert(expense: Expense): Promise<ExpensesEntity> {
    return this.expensesRepository.insert(expense);
  }

  async deleteMany(personId: number): Promise<ExpensesEntity[]> {
    return this.expensesRepository.deleteMany(personId);
  }
}
