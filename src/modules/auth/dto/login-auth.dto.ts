import { Transform } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {

  @ApiProperty({ example: 'john_doe' })
  @IsString()
  userName: string;

  @ApiProperty({ example: '123456', minLength: 6 })
  @IsString()
  @MinLength(6)
  @Transform(({ value }) => value.trim())
  password: string;

}