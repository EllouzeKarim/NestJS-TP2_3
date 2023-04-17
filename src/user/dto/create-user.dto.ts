import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(10)
  username: string;
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(30)
  email: string;
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(16)
  password: string;
}
