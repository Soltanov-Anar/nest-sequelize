import { HttpException, Injectable, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/users.model';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService) {}

  async login(userDTO: CreateUserDTO) {
    const user: User = await this.validateUser(userDTO);

    return this.generateToken(user);
  }

  async registration(userDTO: CreateUserDTO) {
    const isRegUser = await this.userService.getUserByEmail(userDTO.email);

    if (isRegUser) {
      throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(userDTO.password, 5);
    const user = await this.userService.createUser({ ...userDTO, password: hashPassword });
    return this.generateToken(user);
  }

  private async generateToken({ id, email, roles }: User) {
    const payload = { id, email, roles };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDTO: CreateUserDTO) {
    const user = await this.userService.getUserByEmail(userDTO.email);
    const passwordEquals = await bcrypt.compare(userDTO.password, user.password);

    if (user && passwordEquals) return user;

    throw new UnauthorizedException({ message: 'Некорректный email или пароль' });
  }
}
