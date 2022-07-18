import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user-dto';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: HttpStatus.OK, type: User })
  @Post()
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.usersService.createUser(createUserDTO);
  }

  @ApiOperation({ summary: 'Полученить всех пользователей' })
  @ApiResponse({ status: HttpStatus.OK, type: [User] })
  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }
}
