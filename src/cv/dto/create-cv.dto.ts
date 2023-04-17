import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCvDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(10)
  @IsString()
  name: string;
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(10)
  firstname: string;
  @IsNotEmpty()
  @IsNumber()
  age: number;
  @IsNotEmpty()
  cin: string;

  job: string;

  path: string;
}
