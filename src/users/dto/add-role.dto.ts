import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDTO {
  @ApiProperty({ example: 'USER', description: 'Название роли' })
  readonly value: string;

  @ApiProperty({ example: 1, description: 'Уникальный идентификатор пользователя' })
  readonly userId: number;
}
