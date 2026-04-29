import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { hashPassword } from 'src/helpers/bcrypt.helper';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const { userName } = createUserDto;

    createUserDto.password = await hashPassword(createUserDto.password);

    const user = await this.prisma.user.findFirst({ where: { userName } });
    if (user?.active) {
      throw new BadRequestException('User already exists');
    }

    return await this.prisma.user.create({ data: createUserDto });
  }

  async findAll(): Promise<CreateUserDto[]> {
    const users = await this.prisma.user.findMany({ where: { active: true } });

    if (users.length === 0) {
      throw new NotFoundException('Users not found');
    }

    return users;
  }

  async findOne(id: number, getDeletes?: boolean) {
    const user = await this.prisma.user.findFirst({
      where: { id, active: getDeletes || true },
    });

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    return user;
  }

  async findOneByUserName(userName: string, getDeletes?: boolean) {
    const user = await this.prisma.user.findFirst({
      where: { userName, active: getDeletes || true },
    });

    if (!user) {
      throw new NotFoundException(`User not found`);
    }

    return user;
  }

  async update(id: number, updateUserDto: Partial<UpdateUserDto>, getDeletes?: boolean) {
    const user = await this.findOne(id, getDeletes);

    if (updateUserDto.userName !== undefined) {
      const isUsed = await this.prisma.user.findFirst({
        where: { userName: updateUserDto.userName },
      });
      if (isUsed) {
        throw new BadRequestException('Username already exists');
      }
    }

    return user;
  }

  async remove(id: number) {
    const user = await this.findOne(id, false);

    if (user.role === 'admin') {
      throw new BadRequestException(`SuperAdmin can't be deleted`);
    }

    await this.update(id, { active: false });
    return `${user.userName} has been deleted`;
  }

  async restore(id: number) {
    return await this.update(id, { active: true }, true);
  }

  async createSuperAdmin() {
    const userName = 'Administrador';
    const password = 'supersecurepassword';
    const role = 'admin';

    const existing = await this.prisma.user.findFirst({ where: { userName } });
    if (existing) {
      throw new BadRequestException('SuperAdmin already exists');
    }

    return await this.prisma.user.create({
      data: {
        userName,
        password: await hashPassword(password),
        role,
      },
    });
  }
}