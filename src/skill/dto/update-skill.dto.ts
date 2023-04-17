import { PartialType } from '@nestjs/mapped-types';
import { CreateSkillDto } from './create-skill.dto';
import { IsOptional, MaxLength, MinLength } from 'class-validator';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {
  @IsOptional()
  @MinLength(3)
  @MaxLength(30)
  designation: string;
}
