import { ApiProperty } from '@nestjs/swagger';

export class Person {
  @ApiProperty({ type: String, nullable: false })
  name: string;

  @ApiProperty({ type: Number, nullable: false })
  age: number;
}
