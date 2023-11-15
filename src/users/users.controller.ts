import { Body, Controller, Post, Header } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  @Header('Access-Control-Allow-Origin', 'http://localhost:3030')
  @Header('Access-Control-Allow-Methods', 'GET, POST, OPIONS')
  create(@Body() createUserDto: CreateUserDto): string {
    return `This action adds a user with id ${createUserDto.id}`;
  }
}
