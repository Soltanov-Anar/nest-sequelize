import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDTO {
  @ApiProperty({ example: 'USER', description: 'Название роли' })
  @IsString({ message: 'Поле value должен быть строкой' })
  readonly value: string;

  @ApiProperty({ example: 1, description: 'Уникальный идентификатор пользователя' })
  @IsNumber({}, { message: 'Поле userId должен быть числом' })
  readonly userId: number;
}
