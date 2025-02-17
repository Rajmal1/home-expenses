import { ApiProperty } from '@nestjs/swagger';

export class Expense {
  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: Number, nullable: false })
  value: number;

  @ApiProperty({ type: String, nullable: false })
  type: string;

  @ApiProperty({ type: Number, nullable: false })
  personId: number;
}
