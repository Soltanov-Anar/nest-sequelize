import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface PostCreationAttrs {
  readonly title: string;
  readonly content: string;
  readonly userId: number;
  readonly image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Lorem', description: 'Заголовок поста' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  @ApiProperty({ example: 'Lorem opsum...', description: 'Содержание поста' })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({ example: '', description: 'Изображение поста' })
  @Column({ type: DataType.STRING })
  image: string;

  @ApiProperty({ example: 1, description: 'Уникальный идентификатор пользователя' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @ApiProperty({ example: 'Elon Mask', description: 'Автор поста' })
  @BelongsTo(() => User)
  author: User;
}
