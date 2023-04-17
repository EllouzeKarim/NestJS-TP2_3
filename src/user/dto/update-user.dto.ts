import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // @IsOptional()
  // @MinLength(3)
  // @MaxLength(10)
  // username: string;
  // @IsOptional()
  // @MinLength(8)
  // @MaxLength(30)
  // email: string;
  // @IsOptional()
  // @MinLength(8)
  // @MaxLength(16)
  // password: string;
}
