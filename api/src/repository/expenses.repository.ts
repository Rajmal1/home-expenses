import { Injectable } from '@nestjs/common';
import { ExpensesEntity } from './models/expenses.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from 'src/shared/types/expenses.type';

@Injectable()
export class ExpensesRepository {
  constructor(
    @InjectRepository(ExpensesEntity)
    private readonly expensesRepository: Repository<ExpensesEntity>,
  ) {}

  async insert(expense: Expense): Promise<ExpensesEntity> {
    const newExpense = await this.expensesRepository.insert(expense);

    return newExpense.raw as ExpensesEntity;
  }

  async deleteMany(personId: number): Promise<ExpensesEntity[]> {
    const deletedExpenses = await this.expensesRepository.delete({ personId });

    return deletedExpenses.raw as ExpensesEntity[];
  }
}
