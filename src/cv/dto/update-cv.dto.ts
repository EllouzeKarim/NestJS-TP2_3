import { PartialType } from '@nestjs/mapped-types';
import { CreateCvDto } from './create-cv.dto';
import {
  IsOptional,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateCvDto extends PartialType(CreateCvDto) {
  @IsOptional()
  @MinLength(3)
  @MaxLength(10)
  @IsString()
  name: string;
  @IsOptional()
  @MinLength(3)
  @MaxLength(10)
  firstname: string;
  @IsOptional()
  @IsNumber()
  age: number;
  @IsOptional()
  cin: string;

  job: string;

  path: string;
}
