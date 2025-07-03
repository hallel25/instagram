import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UUID } from 'crypto';

@Controller('users/')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @Get(':userId')
  getUserById(@Param('userId') userId: UUID) {
    return this.userService.getUsersById(userId);
  }
}
