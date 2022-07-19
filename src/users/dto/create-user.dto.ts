import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty({ example: 'test@mail.ru', description: 'Электронная почта' })
  @IsString({ message: 'Поле email должен быть строкой' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;

  @ApiProperty({ example: 'test123', description: 'Пароль' })
  @IsString({ message: 'поле password должен быть строкой' })
  @Length(6, 24, { message: 'Пароль должен содержать не меньше 6 символов и не больше 24' })
  readonly password: string;
}
