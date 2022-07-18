import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDTO {
  @ApiProperty({ example: 'test@mail.ru', description: 'Электронная почта' })
  readonly email: string;

  @ApiProperty({ example: 'test123', description: 'Пароль' })
  readonly password: string;
}
