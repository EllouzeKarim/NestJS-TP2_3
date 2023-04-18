import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import {maxLength, minLength, notEmpty} from "./messages";
// import { notEmpty, minLength, maxLength } from 'C:/Users/ad/tp2nest/src/todo/dto/messages';

export class AddTodoDto {
  @IsNotEmpty({ message: (validationData) => notEmpty(validationData) })
  @MinLength(3, { message: (validationData) => minLength(validationData) })
  @MaxLength(10, { message: (validationData) => maxLength(validationData) })
  name: string;

  @IsNotEmpty({ message: (validationData) => notEmpty(validationData) })
  @MinLength(10, { message: (validationData) => minLength(validationData) })
  description: string;
}
