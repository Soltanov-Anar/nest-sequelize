import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор пользователя' })
  readonly userId: number;

  @ApiProperty({ example: 'Спам', description: 'Причина бана' })
  readonly banReason: string;
}
