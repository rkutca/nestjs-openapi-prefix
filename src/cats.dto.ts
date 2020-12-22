import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';


export class CreateCatDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsInt()
  readonly age: number;

  @ApiProperty()
  @IsString()
  readonly breed: string;
}