import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateSkillDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  designation: string;
}
