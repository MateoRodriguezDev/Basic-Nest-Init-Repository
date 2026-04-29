import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { checkPassword } from 'src/helpers/bcrypt.helper';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register({ password, userName }: RegisterAuthDto) {
    await this.usersService.create({ userName, password });
    return { message: 'User created successfully' };
  }

  async login({ userName, password }: LoginAuthDto) {
    const user = await this.usersService.findOneByUserName(userName);

    const isPasswordValid = await checkPassword(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid credentials');
    }

    const payload = { userName: user.userName, role: user.role, id: user.id };
    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      userName: user.userName,
      role: user.role,
      id: user.id,
    };
  }
}