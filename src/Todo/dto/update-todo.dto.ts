import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';
import { TodoStatusEnum } from '../Enums/todos-status.enum';
import {maxLength, minLength} from "./messages";
export class UpdateTodoDto {
  @IsOptional()
  @MinLength(3, { message: (validationData) => minLength(validationData) })
  @MaxLength(10, { message: (validationData) => maxLength(validationData) })
  name: string;

  @IsOptional()
  @MinLength(10, { message: (validationData) => minLength(validationData) })
  description: string;

  @IsOptional()
  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum;
}
