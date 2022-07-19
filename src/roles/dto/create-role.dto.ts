import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDTO {
  @ApiProperty({ example: 'USER', description: 'Значение роли' })
  readonly value: string;

  @ApiProperty({ example: 'Пользователь', description: 'Описание роли' })
  readonly description: string;
}
