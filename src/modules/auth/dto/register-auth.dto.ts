import { Transform } from "class-transformer";
import { IsEmail, IsString, MinLength } from "class-validator";
import { LoginAuthDto } from "./login-auth.dto";

export class RegisterAuthDto extends LoginAuthDto{
  
}